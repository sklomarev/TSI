import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  message: string;
}

const Blog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Продукты</h1>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="p-4 border rounded">
            <h2 className="font-semibold">{product.title}</h2>
            <p>{product.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;