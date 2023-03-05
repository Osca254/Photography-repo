import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <small>oscarokumu47@gmail © {year}. All Rights Reserved.</small>
    </div>
  )
}