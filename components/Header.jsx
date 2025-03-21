import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <header className ="flex justify-between items-center p-8 pl-32 rounded-lg">
                    <div className="text-lg font-semibold">Lavka</div>
                    <nav className="flex gap-6">
                        <a href="/" className="text-gray-800 hover:text-gray-500">Главная</a>
                        <a href="/about" className="text-gray-800 hover:text-gray-500">О нас</a>
                    </nav>
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                        <a href="/blog">
                            Корзина
                        </a>
                    </button>
            </header>
        )
    }
}

export default Header