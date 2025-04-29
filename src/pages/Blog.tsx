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
            <div className = "min-h-130 p-8 pl-32">блог </div>
        )
    }
}

export default Blog
