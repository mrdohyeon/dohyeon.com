import React from 'react'
import './styles.css'

const RoundedButton = ({ link, title }) => (
  <a className="RoundedButton" href={link}>{title}</a>
)

export default RoundedButton
