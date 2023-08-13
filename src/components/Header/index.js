import React from 'react'
import moment from 'moment'

import { Container, RoundedButton } from '..'
import './styles.css'

const Header = () => (
  <div className="Header">
    <div className="buttons">
      <RoundedButton title="블로그" link="//dohyeon.com" />
    </div>

    <Container>
      <div className="name">
        Dohyeon Kim
      </div>

      <div className="title">
        Software Engineer
      </div>

      <div className="twitter">
        <a href="https://twitter.com/mrdohyeon">@mrdohyeon</a>
      </div>

      <div className="description">
        Leveraging technology to lead people to their next steps.
      </div>
    </Container>
  </div>
)

export default Header
