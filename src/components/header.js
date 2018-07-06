import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgb(161, 137, 191)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#281211',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <span style={{
          fontFamily: 'Arial',
          fontSize: '25px',
          marginLeft: '20px',
          color: '#281211;'}}>#dondeevow</span>
      </h1>
    </div>
  </div>
)

export default Header
