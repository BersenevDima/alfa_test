import { v4 as uuidv4 } from "uuid";
import type { Product } from "../types/product";

const API_KEY = "54b8c44e90e239b302f584cda6733f65";

export const fetchProductsAPI = async (): Promise<Product[]> => {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=dota&lang=ru&max=10&apikey=${API_KEY}`
    );

    if (!res.ok) throw new Error("Не удалось загрузить новости");

    const data = await res.json();

    return data.articles
      .filter((a: any) => a.title && a.description && a.image)
      .map((a: any) => ({
        id: uuidv4(),
        title: a.title,
        description: a.description,
        image: a.image,
        liked: false,
      }));
  } catch (error) {
    console.error("Ошибка загрузки новостей:", error);
    return [];
  }
};
