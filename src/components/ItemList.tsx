interface Item {
  title: string;
  description: string;
  price: number | string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div
      className="grid gap-8 mt-8"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
    >
      {items.map((item, index) => (
        <div
          style={{ boxShadow: "0 0px 10px rgba(0, 0, 0, 1)" }}
          key={index}
          className="bg-white/20 border border-white/40 rounded-[40px] shadow-lg overflow-hidden flex flex-col"
        >
          <div className="h-48 flex items-center justify-center text-gray-500 text-sm">
            Картинка
          </div>

          <div className="border-t border-b px-4 py-2 text-center bg-white">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>

          <div className="py-2 px-4 text-center font-bold text-green-600 bg-white">
            {typeof item.price === 'number' ? `${item.price} Р` : item.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;