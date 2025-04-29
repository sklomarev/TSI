import React, { PureComponent } from 'react';
import ItemList from '../components/ItemList';
import {AddItemModal} from '../components/AddItemModal';

interface Item {
  title: string;
  description: string;
  price: number;
}

interface HomeProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

interface HomeState {
  items: Item[];
}

class Home extends PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      items: [
        { title: 'Товар 1', description: 'Описание', price: 100 },
        { title: 'Товар 1', description: 'Описание', price: 100 },
        { title: 'Товар 1', description: 'Описание', price: 100 },
        { title: 'Товар 1', description: 'Описание', price: 100 },
        { title: 'Товар 1', description: 'Описание', price: 100 },
        { title: 'Товар 1', description: 'Описание', price: 100 },
      ],
    };
  }

  handleAddItem = (item: Item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
    this.props.setIsModalOpen(false);
  };

  render() {
    return (
      <div className="container mx-auto p-8 pb-16">
        <ItemList items={this.state.items} />
        
        {this.props.isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <AddItemModal 
              onAdd={this.handleAddItem} 
              onClose={() => this.props.setIsModalOpen(false)} 
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;