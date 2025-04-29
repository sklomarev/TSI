import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const AddItemModal = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.price) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    
    onAdd({
      title: formData.title,
      description: formData.description,
      price: Number(formData.price)
    });
    
    // Закрываем модальное окно после добавления
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Добавить новый товар</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          name="title"
          placeholder="Название товара"
          value={formData.title}
          onChange={handleChange}
          size="medium"
          color="black"
          required
        />
        
        <Input
          type="text"
          name="description"
          placeholder="Описание товара"
          value={formData.description}
          onChange={handleChange}
          size="medium"
          color="black"
          required
        />
        
        <Input
          type="number"
          name="price"
          placeholder="Цена (₽)"
          value={formData.price}
          onChange={handleChange}
          size="medium"
          color="black"
          min="0"
          step="1"
          required
        />
        
        <div className="flex gap-3 justify-end mt-4">
          <Button
            type="button"
            title="Закрыть"
            color="secondary"
            size="medium"
            onClick={onClose}
          />
          <Button
            type="submit"
            title="Добавить"
            color="primary"
            size="medium"
          />
        </div>
      </form>
    </div>
  );
};