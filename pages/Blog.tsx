import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>Hello</div>
        )
    }
}

export default Blog
