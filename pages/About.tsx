import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-6">О нас</h1>
                    <p className="text-gray-700 mb-6">
                    текст<br></br>тексттекст<br></br>тексттекст<br></br>текст
                    текст<br></br>тексттекст<br></br>текст
                    текст<br></br>тексттекст<br></br>текст
                    текст<br></br>тексттекст<br></br>текст
                    текст<br></br>тексттекст<br></br>текст
                    текст<br></br>тексттекст<br></br>текст
                    </p>

                    <div>
                    <h2 className="text-2xl font-semibold mb-4">Связь</h2>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Имя"
                            className="w-1/2 p-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Фамилия"
                            className="w-1/2 p-2 border rounded-md"
                        />
                        </div>
                        <input
                        type="email"
                        placeholder="mail@mail.ru"
                        className="w-full p-2 border rounded-md"
                        />
                        <textarea
                        placeholder="Сообщение"
                        className="w-full p-2 border rounded-md h-32"
                        ></textarea>
                        <button className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800">
                        Отправить
                        </button>
                    </form>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <img
                    src="./pic/picture1.jpg"
                    alt="картиночка"
                    className="rounded-2xl shadow-lg max-w-xs md:max-w-sm"
                    />
                </div>
            </div>
        )
    }
}

export default About
