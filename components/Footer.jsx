import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div className="bg-red-500 text-lg">
                <div>Footer</div>
                <div><a href='/'>Home</a></div>
                <div><a href='/About'>About</a></div>
                <div><a href='/Blog'>Blog</a></div>
                </div>
            </>
        )
    }
}

export default Footer