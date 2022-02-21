
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  header,
  pfp,
  navigation,
  navLeft,
  navRight,
  active
} from '../styles/sass/layout.module.scss'

import icon from "../images/pfp.svg"
import { useColorMode } from 'theme-ui'

const Layout = ({ pageTitle, children }) => {
  
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
const [colorMode, setColorMode] = useColorMode()
// const nextColorMode = colorMode === 'light' ? 'dark' : 'light'

  return (
    
    <div>
      <div className={container}>
        <div className={header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          // viewBox="0 0 430 129"
          // style={{ position: "absolute", top: "0", left: "0" }}
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="35.2px"
                height="35.2px"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="none"
                  strokeWidth="2"
                  stroke={"#939393"}
                />
              </pattern>
            </defs>

            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
            <svg x="48%" y="9%" style={{ overflow: 'visible' }}>
              <circle cx="33" cy="38" r="40" fill="white" />
              <circle cx="43" cy="33" r="29" fill="#C4C4C4" />
            </svg>
            <svg x="30%">
              <path d="M56 33L58.2627 38.7373L64 41L58.2627 43.2627L56 49L53.7373 43.2627L48 41L53.7373 38.7373L56 33Z" fill="#C4C4C4" />
              <path d="M107 85L109.263 90.7373L115 93L109.263 95.2627L107 101L104.737 95.2627L99 93L104.737 90.7373L107 85Z" fill="#C4C4C4" />
              <path d="M174 38L176.263 43.7373L182 46L176.263 48.2627L174 54L171.737 48.2627L166 46L171.737 43.7373L174 38Z" fill="#C4C4C4" />
              <path d="M232 85L234.263 90.7373L240 93L234.263 95.2627L232 101L229.737 95.2627L224 93L229.737 90.7373L232 85Z" fill="#C4C4C4" />
            </svg>
            <svg x="53%">
              <path d="M56 33L58.2627 38.7373L64 41L58.2627 43.2627L56 49L53.7373 43.2627L48 41L53.7373 38.7373L56 33Z" fill="#C4C4C4" />
              <path d="M107 85L109.263 90.7373L115 93L109.263 95.2627L107 101L104.737 95.2627L99 93L104.737 90.7373L107 85Z" fill="#C4C4C4" />
              <path d="M174 38L176.263 43.7373L182 46L176.263 48.2627L174 54L171.737 48.2627L166 46L171.737 43.7373L174 38Z" fill="#C4C4C4" />
              <path d="M232 85L234.263 90.7373L240 93L234.263 95.2627L232 101L229.737 95.2627L224 93L229.737 90.7373L232 85Z" fill="#C4C4C4" />
            </svg>
          </svg>
          <div className={pfp}>
            <img src={icon}></img>
          </div>
        </div>


        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
        
        <nav className={navigation}>
          <div>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" activeClassName={active} className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" activeClassName={active} className={navLinkText}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/blog" activeClassName={active} className={navLinkText}>
                  Work
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/contact" activeClassName={active} className={navLinkText}>
                  Contact
                </Link>
              </li>
              <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
          plz click me
        </button>
            </ul>
          </div>
        </nav>
        <main>
          <h1 sx={{bg: 'primary'}}className={heading}>{pageTitle}</h1>
          <hr />
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout