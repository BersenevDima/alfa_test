import { v4 as uuidv4 } from "uuid";
import type { Product } from "../types/product";

const API_KEY = "e233b3387f5a4423ae7f727ac36ba5a3";

export const fetchProductsAPI = async (): Promise<Product[]> => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=apple&pageSize=9&apiKey=${API_KEY}`
    );

    if (!res.ok) throw new Error("Не удалось загрузить новости");
    const data = await res.json();

    return data.articles
      .filter((a: any) => a.title && a.description && a.urlToImage)
      .map((a: any) => ({
        id: uuidv4(),
        title: a.title,
        description: a.description,
        image: a.urlToImage,
        liked: false,
      }));
  } catch (error) {
    console.error("Ошибка загрузки новостей:", error);
    return [];
  }
};
