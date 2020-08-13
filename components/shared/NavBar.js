import React, { useState, useContext, useReducer } from 'react'
import { useAuth0 } from '../../lib/auth0-spa'
import ActiveLink from './ActiveLink'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'
import Author from '../../svgs/author.svg'
import AuthorLight from '../../svgs/authorLight.svg'
import GitHub from '../../svgs/github.svg'
import GitHubDark from '../../svgs/githubDark.svg'
import { useScrollPosition } from '../layouts/UseScrollPosition'
import { ThemeContext, DispatchContext } from '../../lib/themeContext'

// function navReducer(state, action) {
//   switch (action.type) {
//     case 'shrink':
//       return {
//         ...state,
//         navClass: 'navbar-light bg-light text-dark  p-0 shadow-lg',
//         navShrink: true,
//         authorImage: Author,
//         gitHubImage: GitHubDark,
//         // gitHubImage: theme.dark.gitHubImage,
//       }
//     case 'grow':
//       return {
//         ...state,
//         navClass: 'navbar-dark text-white bg-transparent p-2 navhead',
//         navShrink: false,
//         authorImage: AuthorLight,
//         gitHubImage: GitHub,
//       }
//     default:
//       throw new Error()
//   }
// }

const NavBar = ({ page }) => {
  const state = useContext(ThemeContext)
  const dispatch = useContext(DispatchContext)

  const { isAuthenticated, loginWithRedirect, logout, isOwner } = useAuth0()
  const router = useRouter()
  // const [state, dispatch] = useReducer(navReducer, {
  //   navClass: theme.navClass,
  //   navShrink: false,
  //   authorImage: theme.authorImage,
  //   gitHubImage: theme.gitHubImage,
  // })
  {
    state.useNavShrink &&
      useScrollPosition(
        ({ prefPos, currPos }) => {
          const isShow = currPos.y < -60
          if (isShow !== state.navShrink)
            isShow ? dispatch({ type: 'shrink' }) : dispatch({ type: 'grow' })
        },
        [state],
        false,
        false,
        300
      )
  }
  return (
    <Navbar fixed="top" className={state.navClass}>
      <ActiveLink activeClassName="active" href="/">
        <a className="navbar-brand ml-2" href="/">
          <img
            src={state.authorImage}
            width="60"
            height="100%"
            className="d-inline-block align-middle"
            alt="Bryant Patton logo"
          />
        </a>
      </ActiveLink>
      <ul className="navbar-nav mr-auto">
        {/* hiding portfolio page until formatted */}
        {/* {isAuthenticated && isOwner ? (
          <ActiveLink activeClassName="active" href="/portfolio">
            <NavDropdown title="Portfolio" id="portfolio-nav-dropdown">
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault()
                  router.push('/portfolio/new')
                }}
              >
                Add Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </ActiveLink>
        ) : (
          <li className="nav-item">
            <ActiveLink activeClassName="active" href="/portfolio">
              <a className="nav-link " href="/portfolio">
                Portfolio
              </a>
            </ActiveLink>
          </li>
        )} */}
        <li className="nav-item">
          <ActiveLink activeClassName="active" href="/cv">
            <a className="nav-link" href="/cv">
              CV
            </a>
          </ActiveLink>
        </li>
        {isAuthenticated && isOwner && (
          <li className="nav-item">
            <a onClick={() => logout()} className="nav-link port-navbar-link ">
              Logout
            </a>
          </li>
        )}
        {!isAuthenticated && isOwner && (
          <li className="nav-item">
            <a
              onClick={() => loginWithRedirect()}
              className="nav-link port-navbar-link"
            >
              Login
            </a>
          </li>
        )}
      </ul>
      <ul className="navbar-nav mr-2">
        <li className="nav-item">
          <a
            className="nav-link "
            href="https://github.com/bryant00"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={state.gitHubImage} width="40px" height="auto" />
          </a>
        </li>
      </ul>
    </Navbar>
  )
}
// NavBar.whyDidYouRender = true
export default NavBar
