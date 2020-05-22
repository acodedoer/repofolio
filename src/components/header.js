import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      paddingTop:'0.5rem',
      paddingBottom: '0.5rem',
      position:"absolute",
      top:"0",
      left:"0",
      width:"100vw",
      height:"4rem",
      paddingLeft:'2rem',
      paddingRight: '2rem',
      boxSizing:'border-box',
      backgroundColor: "#2B2C28"
    }}
  >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: `none`,
            fontSize: '2rem'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
