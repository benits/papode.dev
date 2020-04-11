import React from "react"

import SocialLinks from "../SocialLinks"
import Profile from "../Profile"

import * as S from "./styled"
import MenuLinks from "../MenuLinks"

const Sidebar = () => (
  <S.SiderbarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SiderbarWrapper>
)

export default Sidebar
