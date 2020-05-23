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
            href="https://github.com/email2vimalraj/Bin2Dec"
            target="__blank"
          >
            App Ideas Collection
          </S.ItemLink>
          .
        </S.Description>
        <S.CardWrapper>
          <ConversorBinToDec />
        </S.CardWrapper>
      </S.ContentWrapper>
    )
  }
}
