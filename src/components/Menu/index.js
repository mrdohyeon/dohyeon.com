import React from 'react'

import { Container } from '..'
import menus from '../../data/menus'
import './styles.css'

const Menu = ({ tag, onTagSelect }) => (
  <div className="Menu">
    <Container>
      {menus.map((menu, i) => (
        <div key={i} className={`item ${tag === menu.tag && 'selected'}`} onClick={e => {
          e.preventDefault()
          onTagSelect(menu.tag)
        }}>
         {menu.name}
        </div>
      ))}
    </Container>
  </div>
)

export default Menu
