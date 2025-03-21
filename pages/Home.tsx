import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <>
                <div className =" p-8 pl-32 border-2 border-gray-300 h-150"> hello</div>
            </>
        )
    }
}

export default Home
