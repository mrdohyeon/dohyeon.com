import React, { Component } from 'react'

import './styles.css'

class Device extends Component {
  render() {
    const { isPhone, device, screens, youtube } = this.props

    // TODO: image slide

    return (
      <div className={`Device ${device} ${isPhone && 'phone'}`}>
        <div className="screen">
          {screens && screens.length > 0 && (
            <img src={`/${screens[0]}`} alt="screen" />
          )}

          {youtube && (
            <div className="embed-container">
              <iframe title={youtube} src={`https://www.youtube.com/embed/${youtube}`} frameBorder="0" allowFullScreen></iframe>
            </div>
          )}
        </div>
      </div>
    )
  }
}


export default Device
