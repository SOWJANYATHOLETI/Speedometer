// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncreaseSpeed = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onDecreaseSpeed = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="accelerate-button"
            type="button"
            onClick={this.onIncreaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            type="button"
            onClick={this.onDecreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
