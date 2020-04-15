import React from "react"
import GlobalStyles from "../../styles/global"

import * as S from "./styled"

const NotFoundPage = () => (
  <S.Container>
    <GlobalStyles />
    <S.Title>404</S.Title>
    <S.Text>Ué? Cadê? Parece que não tem o que você procura.</S.Text>
    <S.Button
      cover
      direction="right"
      duration={0.6}
      bg="var(--background)"
      to="/"
    >
      De volta ao blog!
    </S.Button>
  </S.Container>
)

export default NotFoundPage
