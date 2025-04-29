import { PureComponent } from 'react';
import ItemList from '../components/ItemList';
import AddItemModal from '../components/AddItemModal';
import { Button } from '../components/Button';

interface Item {
  id?: string;
  title: string;
  description: string;
  price: number;
  image?: string;
}

interface HomeProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  initialItems?: Item[];
}

interface HomeState {
  items: Item[];
}

class Home extends PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      items: props.initialItems || [
        { title: 'Товар 1', description: 'Пример описания товара', price: 100 },
        { title: 'Товар 2', description: 'Другой пример описания', price: 250 },
      ],
    };
  }

  handleAddItem = (newItem: Item) => {
    this.setState(
      (prevState) => ({
        items: [
          ...prevState.items,
          { ...newItem, id: Date.now().toString() },
        ],
      }),
      () => {
        this.props.setIsModalOpen(false);
      }
    );
  };

  render() {
    const { items } = this.state;
    const { isModalOpen, setIsModalOpen } = this.props;
    
    return (
      <div className="container mx-auto p-8 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Каталог товаров</h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="large"
            color="primary"
            title="Добавить товар"
          />
        </div>

        <ItemList items={items} />

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
            <AddItemModal
              onAdd={this.handleAddItem}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
