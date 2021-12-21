import './index.css'
import { Component } from 'react'

class ClickCounter extends Component {
    state = { count: 0 }

    increaseCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        const { count } = this.state
        return (
            <div className="counter-container">
                <h1 className="heading">
                    The Button has been clicked
                    <br /> <span className="count">{count}</span> times
                </h1>
                <p className="description">Click the button to increase the count</p>
                <button className="btn" onClick={this.increaseCount} type="button">
                    Click Me
                </button>
            </div>
        )
    }
}

export default ClickCounter
