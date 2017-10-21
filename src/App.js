import React, { Component } from 'react'

import { Header, Menu, Row, Footer } from './components'
import projects from './data/projects'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { tag: null }

    this.handleTagSelect = this.handleTagSelect.bind(this)
  }

  handleTagSelect(tag) {
    this.setState({ tag })
  }

  render() {
    const { tag } = this.state

    return (
      <div className="App">
        <Header />

        <Menu tag={tag} onTagSelect={this.handleTagSelect} />

        <div className="rows">
          {projects.map((project, i) => {
            if (!tag || project.tag === tag) {
              return (
                <Row key={i} project={project} />
              )
            }
            return null
          })}
        </div>

        <Footer />
      </div>
    )
  }
}

export default App
