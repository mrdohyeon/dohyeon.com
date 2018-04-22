import React from 'react'
import moment from 'moment'

import { Container, RoundedButton } from '..'
import './styles.css'

const Header = () => (
  <div className="Header">
    <div className="buttons">
      <RoundedButton title="블로그" link="//blog.shako.net" />
    </div>

    <Container>
      <div className="name">
        Dohyeon Kim
      </div>

      <div className="title">
        iOS / Web Developer & Designer
      </div>

      <div className="twitter">
        <a href="https://twitter.com/kimshako">@kimshako</a>
      </div>

      <div className="description">
        Software engineer with {moment('20090209').fromNow(true)} of experience implementing applications in platforms including:
        iOS, Web, Windows Phone, and Unity. Usability is King. Iteration makes perfect.
      </div>
    </Container>
  </div>
)

export default Header
