import React, { useState } from 'react';

interface AddItemModalProps {
  onAdd: (newItem: { title: string; description: string; price: number }) => void;
  onClose: () => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ onAdd, onClose }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newItem); 
  };

  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Добавить новый товар</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Название товара</label>
          <input
            type="text"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Описание товара</label>
          <input
            type="text"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Цена</label>
          <input
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Добавить
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemModal;
