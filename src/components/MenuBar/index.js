import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Dark } from "@styled-icons/boxicons-regular/Bulb"
import { Bulb as Light } from "@styled-icons/boxicons-solid/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl as List } from "@styled-icons/boxicons-regular/ListUl"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover
          direction="right"
          duration={0.6}
          bg="var(--background)"
          activeClassName="active"
          to="/"
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover
          direction="right"
          duration={0.6}
          bg="var(--background)"
          activeClassName="active"
          to="/search"
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          {isDarkMode ? <Dark /> : <Light />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <List /> : <Grid />}
        </S.MenuBarItem>
        <S.MenuBarItem
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }}
          title="Ir para o Topo"
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
