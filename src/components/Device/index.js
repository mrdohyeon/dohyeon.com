import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import './styles.css'

class Device extends Component {
  render() {
    const { isPhone, device, screens, youtube } = this.props

    return (
      <div className={`Device ${device} ${isPhone && 'phone'}`}>
        {screens && (
          <Carousel className="screen" autoplay={true} decorators={null} wrapAround={true} easing="easeInOutExpo" speed={1000}>
            {screens.map((screen, i) => (
              <img key={i} src={screen} alt="screen" />
            ))}
          </Carousel>
        )}

        {youtube && (
          <div className="screen">
            <div className="embed-container">
              <iframe title={youtube} src={`https://www.youtube.com/embed/${youtube}`} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default Device
