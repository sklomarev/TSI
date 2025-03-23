import React, { PureComponent } from 'react'
import { Button } from './Button'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <header className ="flex justify-between items-center p-8 pl-32">
                    <div className="text-lg font-semibold">Lavka</div>
                    <nav className="flex gap-6">
                        <a href="/" className="text-gray-800 hover:text-gray-500">Главная</a>
                        <a href="/about" className="text-gray-800 hover:text-gray-500">О нас</a>
                    </nav>
                    <Button color="primary" size="medium" title="Подтвердить" />
            </header>
        )
    }
}

export default Header