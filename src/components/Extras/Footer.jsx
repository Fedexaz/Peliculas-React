import React from 'react'

export default function Footer() {
  return (
    <div style={{ position: 'static', zIndex: '10001', textAlign: 'center', color: 'white', bottom: 0, paddingTop: '30px', paddingBottom: '20px', background: '#CE312E' }}>
      {new Date().getFullYear()} &copy; Fede Lahoz
    </div>
  )
}
