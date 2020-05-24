import React from "react"

import * as S from "./styled"
import ListCardHandOn from "../ListCardHandOn"
import Projects from "./content"

const HandsOnComponent = () => {
  return (
    <S.ContentWrapper>
      <S.Title>Hands-On</S.Title>
      <S.Description>Bem vindo! </S.Description>
      <S.Description>
        Nessa págin você vai poder ver alguns dos projetos que ja fiz, a fim de
        conhecer alguma técnica ou tecnologia nova.
        <br />
        Ou apenas praticar mesmo.
      </S.Description>
      <S.Description>Fique a Vontade!</S.Description>

      <ListCardHandOn projects={Projects} />
    </S.ContentWrapper>
  )
}

export default HandsOnComponent
