import type { Product } from "../types/product";

export const fetchProductsAPI = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character/?page=19");

    if (!res.ok) throw new Error("Ошибка загрузки персонажей");

    const data = await res.json();

    return data.results.map((char: any) => {
      const episodeCount = char.episode?.length ?? 0;

      return {
        id: char.id.toString(),
        title: char.name,
        description: [
          `${char.status} • ${char.species}${char.type ? ` (${char.type})` : ""} • ${char.gender}`,
          `Происхождение: ${char.origin?.name || "Неизвестно"}`,
          `Локация: ${char.location?.name || "Неизвестно"}`,
          `Эпизодов: ${episodeCount}`
        ].join("\n"),
        image: char.image,
        liked: false,
      };
    });
  } catch (err) {
    console.error("Ошибка загрузки персонажей:", err);
    return [];
  }
};
