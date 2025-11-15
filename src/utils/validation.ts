import type { ProductFormValues, ProductFormErrors } from "../types/product";

export const validateProductForm = (values: ProductFormValues): ProductFormErrors => {
  const errors: ProductFormErrors = {};

  if (!values.title?.trim()) {
    errors.title = "Пожалуйста, укажите заголовок товара";
  } else if (values.title.trim().length < 3) {
    errors.title = "Заголовок должен содержать минимум 3 символа";
  }

  if (!values.description?.trim()) {
    errors.description = "Пожалуйста, укажите описание товара";
  } else if (values.description.trim().length < 10) {
    errors.description = "Описание должно содержать минимум 10 символов";
  }

  if (!values.image?.trim()) {
    errors.image = "Пожалуйста, введите URL изображения";
  } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(values.image.trim())) {
    errors.image = "Укажите корректный URL, который ведёт на изображение";
  }

  return errors;
};
