import React from "react"

import * as S from "./styled"

import ConversorBinToDec from "../ConversorBinToDec"

export default class BinToDecComponent extends React.Component {
  render() {
    return (
      <S.ContentWrapper>
        <S.Title>Bin2Dec - Number Converter</S.Title>
        <S.Description>
          O Bin2Dec permite que o usuário insira seqüências de até 8 dígitos
          binários, 0 e 1, em qualquer sequência e, em seguida, exibe seu
          equivalente decimal, e vice e versa.
        </S.Description>
        <S.Description>
          Esse projeto foi baseado na ideia do repositorio{" "}
          <S.ItemLink
            href="https://github.com/florinpop17/app-ideas"
            target="__blank"
          >
            App Ideas Collection
          </S.ItemLink>
          .
        </S.Description>
        <S.Description>
          Quer ver como ficou o código?
          <br />
          como eu fiz para criei esses conversores?
          <br />
          acesse o link dessa pagina no github.
          <br />
          <S.ItemLink
            href="https://github.com/benits/papode.dev/blob/master/src/pages/BinToDec.js"
            target="__blank"
          >
            Bin2Dec - Number Converter
          </S.ItemLink>
        </S.Description>
        <S.CardWrapper>
          <ConversorBinToDec />
        </S.CardWrapper>
      </S.ContentWrapper>
    )
  }
}
