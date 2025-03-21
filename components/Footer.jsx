import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <footer className="flex justify-between items-start p-8 pl-32">
            <div className="text-lg font-semibold">Lavka</div>
            <div className="flex gap-16">
                <div className="text-center">
                <h3 className="font-semibold">Группа 1</h3>
                <ul className="mt-2 space-y-1">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 1</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 2</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 3</a></li>
                </ul>
                </div>
                <div className="text-center">
                <h3 className="font-semibold">Группа 2</h3>
                <ul className="mt-2 space-y-1">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 1</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 2</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 3</a></li>
                </ul>
                </div>
                <div className="text-center">
                <h3 className="font-semibold">Группа 3</h3>
                <ul className="mt-2 space-y-1">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 1</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 2</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Ссылка 3</a></li>
                </ul>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer