import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <div className="bg-green-500 text-lg">
                <div>Header</div>
                <a href='/'>Home </a>
                <a href='/About'>About </a>
                <a href='/Blog'>Blog</a>
            </div>
            </>
        )
    }
}

export default Header