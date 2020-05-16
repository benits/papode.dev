import React, { useState } from "react"
import { LightSpeedIn } from "animate-css-styled-components"

import SocialLinks from "../SocialLinks"
import Profile from "../Profile"

import * as S from "./styled"
import MenuLinks from "../MenuLinks"

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleButton = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <S.SiderbarWrapper>
        <Profile />
        <SocialLinks />
        <MenuLinks />
        <S.ToggleButton
          isActive={isActive}
          toggleButton={toggleButton}
          buttonWidth={32}
        />
      </S.SiderbarWrapper>
      <S.Wrapper display={isActive ? "flex" : "none"}>
        <LightSpeedIn>
          <S.MenuMobile>
            <MenuLinks />
            <SocialLinks />
          </S.MenuMobile>
        </LightSpeedIn>
      </S.Wrapper>
    </>
  )
}

export default Sidebar
