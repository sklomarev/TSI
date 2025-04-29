import React, { PureComponent } from 'react';
import { Button } from './Button';

class Header extends PureComponent {
    render() {
        const { onOpenModal } = this.props;

        return (
            <header className="flex justify-between items-center p-8 border-b border-white">
                <div className="text-lg font-semibold">Lavka</div>
                <nav className="flex gap-6">
                    <a href="/" className="hover:text-white">Главная</a>
                    <a href="/about" className="hover:text-white">О нас</a>
                    <a href="/blog" className="hover:text-white">Блог</a>
                </nav>
                <Button onClick={onOpenModal} size="large" color="primary" title="Добавить" />
            </header>
        );
    }
}

export default Header;
