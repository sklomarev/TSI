import React, { PureComponent, ReactNode } from 'react'

import { Input } from '../components/Input'
import { Text } from '../components/Text'
import { Button } from '../components/Button'

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
                    
                    <Text size="medium" color="black">
                        текст<br/>текст<br/>текст<br/>текст<br/>текст<br/>текст<br/>текст<br/>
                    </Text>
                    <Text size="large" color="red">
                        текст<br/>
                    </Text>
                    <div>
                    <h2 className="text-2xl font-semibold mb-4">Связь</h2>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                        <Input size="medium" color="black" type="text" placeholder="Имя" />
                        <Input size="medium" color="black" type="text" placeholder="Фамилия" />
                        </div>
                        <div>
                        <Input size="medium" color="red" type="email" placeholder="mail@mail.ru" />
                        </div>
                        <Input size="large" color="black" type="text" placeholder="Сообщение" />
                        <Button size="large" color="primary" title="Отправить" />

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
