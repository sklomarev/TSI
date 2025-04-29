import { PureComponent } from 'react';
import AddItemModal from '../components/AddItemModal';
import ItemList from '../components/ItemList';

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt?: string;
}

interface HomeState {
  items: Item[];
  isLoading: boolean;
  isModalOpen: boolean;
  error: string | null;
}

class Home extends PureComponent<{}, HomeState> {
  state: HomeState = {
    items: [],
    isLoading: false,
    isModalOpen: false,
    error: null
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const response = await fetch('http://localhost:5000/api/data');
      if (!response.ok) throw new Error('Ошибка загрузки данных');
      const data = await response.json();
      this.setState({ items: data });
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : 'Неизвестная ошибка' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleAddItem = async (newItem: Omit<Item, 'id'>) => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      
      if (!response.ok) throw new Error('Ошибка сохранения');
      
      await this.fetchItems();
      this.setState({ isModalOpen: false });
    } catch (error) {
      this.setState({ 
        error: error instanceof Error ? error.message : 'Ошибка сохранения',
        isLoading: false
      });
    }
  };

  render() {
    const { items, isLoading, isModalOpen, error } = this.state;

    return (
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Каталог товаров</h1>
          <button
            onClick={() => this.setState({ isModalOpen: true })}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            disabled={isLoading}
          >
            Добавить товар
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            {error}
          </div>
        )}

        {isLoading && !isModalOpen ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <ItemList items={items} />
        )}

        {isModalOpen && (
          <AddItemModal
            onAdd={this.handleAddItem}
            onClose={() => this.setState({ isModalOpen: false })}
            isLoading={isLoading}
          />
        )}
      </div>
    );
  }
}

export default Home;