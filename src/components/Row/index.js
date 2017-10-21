import React, { Component } from 'react'

import { Container } from '..'
import './styles.css'

class Row extends Component {
  render() {
    const { project } = this.props

    return (
      <div className="Row">
        <Container>
          <div className="stack">
            <div className="name">{project.name}</div>
            <div>
              <div className="description">{project.descriptions.join(' ')}</div>

              {project.download && (
                <div className="download">
                  <a href={project.download} target="_blank">
                    <img src={require('./img/download.svg')} alt="download" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>

        {project.screens && (
          <div className="screens">
            {project.screens.map((screen, i) => (
              <img key={i} className="screen" src={`/${screen}`} alt="screen" />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Row
