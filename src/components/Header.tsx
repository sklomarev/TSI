import { PureComponent } from 'react';

interface HeaderProps {
  onOpenModal: () => void;
}

class Header extends PureComponent<HeaderProps> {
  render() {

    return (
      <header className="flex justify-between items-center p-8 border-b border-white">
        <div className="text-lg font-semibold">Lavka</div>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-white">Главная</a>
          <a href="/about" className="hover:text-white">О нас</a>
          <a href="/blog" className="hover:text-white">Блог</a>
        </nav>
      </header>
    );
  }
}

export default Header;
