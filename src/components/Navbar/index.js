/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useState} from "react"
import classnames from "classnames"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"

import SearchBar from "@site/src/components/SearchBar"
import Toggle from "@site/src/components/Toggle"
import {useColorMode} from "theme-ui"
import useHideableNavbar from "@site/src/hooks/useHideableNavbar"
import useLockBodyScroll from "@site/src/hooks/useLockBodyScroll"
import useLogo from "@site/src/hooks/useLogo"

import styles from "./styles.module.css"

function NavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  activeClassName = "navbar__link--active",
  prependBaseUrlToHref,
  ...props
}) {
  const toUrl = useBaseUrl(to)
  const activeBaseUrl = useBaseUrl(activeBasePath)
  const normalizedHref = useBaseUrl(href, true)

  return (
    <Link
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            isNavLink: true,
            activeClassName,
            to: toUrl,
            ...(activeBasePath || activeBaseRegex
              ? {
                  isActive: (_match, location) =>
                    activeBaseRegex
                      ? new RegExp(activeBaseRegex).test(location.pathname)
                      : location.pathname.startsWith(activeBaseUrl),
                }
              : null),
          })}
      {...props}
    >
      {label}
    </Link>
  )
}

function NavItem({items, position, className, ...props}) {
  const navLinkClassNames = (extraClassName, isDropdownItem = false) =>
    classnames(
      {
        "navbar__item navbar__link": !isDropdownItem,
        dropdown__link: isDropdownItem,
      },
      extraClassName,
    )

  if (!items) {
    return <NavLink className={navLinkClassNames(className)} {...props} />
  }

  return (
    <div
      className={classnames("navbar__item", "dropdown", "dropdown--hoverable", {
        "dropdown--left": position === "left",
        "dropdown--right": position === "right",
      })}
    >
      <NavLink
        className={navLinkClassNames(className)}
        {...props}
        onClick={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.target.parentNode.classList.toggle("dropdown--show")
          }
        }}
      >
        {props.label}
      </NavLink>
      <ul className="dropdown__menu">
        {items.map(({className: childItemClassName, ...childItemProps}, i) => (
          <li key={i}>
            <NavLink
              activeClassName="dropdown__link--active"
              className={navLinkClassNames(childItemClassName, true)}
              {...childItemProps}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileNavItem({items, position, className, ...props}) {
  // Need to destructure position from props so that it doesn't get passed on.
  const navLinkClassNames = (extraClassName, isSubList = false) =>
    classnames(
      "menu__link",
      {
        "menu__link--sublist": isSubList,
      },
      extraClassName,
    )

  if (!items) {
    return (
      <li className="menu__list-item">
        <NavLink className={navLinkClassNames(className)} {...props} />
      </li>
    )
  }

  return (
    <li className="menu__list-item">
      <NavLink className={navLinkClassNames(className, true)} {...props}>
        {props.label}
      </NavLink>
      <ul className="menu__list">
        {items.map(({className: childItemClassName, ...childItemProps}, i) => (
          <li className="menu__list-item" key={i}>
            <NavLink
              activeClassName="menu__link--active"
              className={navLinkClassNames(childItemClassName)}
              {...childItemProps}
              onClick={props.onClick}
            />
          </li>
        ))}
      </ul>
    </li>
  )
}

function Navbar() {
  const {
    siteConfig: {
      themeConfig: {navbar: {title, links = [], hideOnScroll = false} = {}},
    },
    isClient,
  } = useDocusaurusContext()
  const [sidebarShown, setSidebarShown] = useState(false)
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false)

  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll)
  const {logoLink, logoLinkProps, logoImageUrl, logoAlt} = useLogo()
  const [colorMode, setColorMode] = useColorMode()

  useLockBodyScroll(sidebarShown)

  const showSidebar = useCallback(() => {
    setSidebarShown(true)
  }, [setSidebarShown])
  const hideSidebar = useCallback(() => {
    setSidebarShown(false)
  }, [setSidebarShown])

  const onToggleChange = useCallback(
    (e) => (e.target.checked ? setColorMode("dark") : setColorMode("default")),
    [setColorMode],
  )

  return (
    <nav
      ref={navbarRef}
      className={classnames("navbar", "navbar--light", "navbar--fixed-top", {
        "navbar-sidebar--show": sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {links != null && links.length !== 0 && (
            <div
              aria-label="Navigation bar toggle"
              className="navbar__toggle"
              role="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                role="img"
                focusable="false"
              >
                <title>Menu</title>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </div>
          )}
          <Link className="navbar__brand" to={logoLink} {...logoLinkProps}>
            {logoImageUrl != null && (
              <img key={isClient} className="navbar__logo" src={logoImageUrl} alt={logoAlt} />
            )}
            {title != null && (
              <strong
                className={classnames("navbar__title", {
                  [styles.hideLogoText]: isSearchBarExpanded,
                })}
              >
                {title}
              </strong>
            )}
          </Link>
          {links
            .filter((linkItem) => linkItem.position === "left")
            .map((linkItem, i) => (
              <NavItem {...linkItem} key={i} />
            ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {links
            .filter((linkItem) => linkItem.position === "right")
            .map((linkItem, i) => (
              <NavItem {...linkItem} key={i} />
            ))}
          {/* TEMPORARILY DISABLE DARK MODE */}
          {false && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              aria-label="Dark mode toggle"
              checked={colorMode === "dark"}
              onChange={onToggleChange}
            />
          )}
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
        </div>
      </div>
      <div role="presentation" className="navbar-sidebar__backdrop" onClick={hideSidebar} />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Link className="navbar__brand" onClick={hideSidebar} to={logoLink} {...logoLinkProps}>
            {logoImageUrl != null && (
              <img key={isClient} className="navbar__logo" src={logoImageUrl} alt={logoAlt} />
            )}
            {title != null && <strong className="navbar__title">{title}</strong>}
          </Link>
          {/* TEMPORARILY DISABLE DARK MODE */}
          {sidebarShown && false && (
            <Toggle
              aria-label="Dark mode toggle in sidebar"
              checked={colorMode === "dark"}
              onChange={onToggleChange}
            />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {links.map((linkItem, i) => (
                <MobileNavItem {...linkItem} onClick={hideSidebar} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
