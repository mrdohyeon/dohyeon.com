import React from 'react'
import moment from 'moment'
import './styles.css'

const Footer = () => (
  <div className="Footer">
    Copyright © {moment().year()} Dohyeon Kim. All rights reserved.
  </div>
)

export default Footer
