import React, { Component } from 'react'

import { Container, Device } from '..'
import { getIsPhone } from './helpers'
import './styles.css'

class Project extends Component {
  render() {
    const { project } = this.props

    const isPhone = getIsPhone(project)

    const deviceElement = (
      <Device {...project} isPhone={isPhone} />
    )

    return (
      <div className="Project">
        <Container>
          <div className="stack">
            <div className={`panel ${isPhone && 'phone'}`}>
              <div className="title">{project.name}</div>

              <div className="subtitle">{project.descriptions.join(' ')}</div>

              {project.download && (
                <div className="download">
                  <a href={project.download} target="_blank">
                    <img src={require('./img/download.svg')} alt="download" />
                  </a>
                </div>
              )}
            </div>

            {isPhone && deviceElement}
          </div>
        </Container>

        {!isPhone && deviceElement}
      </div>
    )
  }
}

export default Project
