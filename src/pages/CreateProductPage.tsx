import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addProduct } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import { validateProductForm } from "../utils/validation";
import type { ProductFormValues, ProductFormErrors } from "../types/product";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;`;

const Form = styled.form`
  display: grid; 
  gap: 12px; 
  max-width: 400px;`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;
const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;
const Button = styled.button`
  padding: 8px 12px;
  background: #1976d2;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  border: none;

  &:disabled {
    background: #9bbce3;
    cursor: not-allowed;
  }
`;

const BackButton = styled(Button)`
  margin-bottom: 1rem;
  background: #444;
`;

const Error = styled.div`
  color: #b00020;
  font-size: 13px;
`;

const CreateProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState<ProductFormValues>({
    title: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState<ProductFormErrors>({});
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (field: keyof ProductFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      setValues(prev => ({ ...prev, [field]: value }));
      if (field === "image") {
        const validImage = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(value);
        setPreview(validImage ? value : null);
      }
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateProductForm(values);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    dispatch(addProduct(values));
    navigate("/products");
  };

  return (
    <Container>

      <BackButton onClick={() => navigate("/products")}>← Назад</BackButton>

      <Form onSubmit={handleSubmit}>
        <label>
          Заголовок
          <Input
            value={values.title}
            onChange={handleChange("title")}
          />
          {errors.title && <Error>{errors.title}</Error>}
        </label>

        <label>
          Описание
          <Textarea
            value={values.description}
            onChange={handleChange("description")}
          />
          {errors.description && <Error>{errors.description}</Error>}
        </label>

        <label>
          Ссылка на изображение
          <Input
            value={values.image}
            onChange={handleChange("image")}
          />
          {errors.image && <Error>{errors.image}</Error>}
        </label>

        {preview && (
          <img
            src={preview}
            width="140"
            alt="preview"
            style={{ borderRadius: 6 }}
          />
        )}

        <Button type="submit">Создать</Button>
      </Form>
    </Container>
  );
};

export default CreateProductPage;
