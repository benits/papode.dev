import React from "react"
import { LightSpeedIn } from "animate-css-styled-components"
import * as S from "./styled"

export default class ConversorBinToDec extends React.Component {
  state = {
    bin: "",
    binHex: "",
    dec: "",
    hex: "",
    revertBinToDec: false,
    revertBinToHex: false,
  }

  _handleChangeBin = e => {
    const binToDec = bin => {
      let dec = 0
      for (let i = 0; i < bin.length; i++) {
        if (bin[bin.length - (i + 1)] === "1") {
          dec += 2 ** i
        }
      }
      return dec
    }

    const maskForNumber = e => {
      let newVal = e.replace(/^[2-9]+$/g, "").replace(/\D/g, "")
      return newVal
    }

    this.setState({
      bin: maskForNumber(e.target.value),
      dec: binToDec(e.target.value),
    })
  }

  _handleChangeDec = e => {
    const maskForNumber = e => {
      let newVal = e.replace(/\D/g, "")
      return newVal
    }

    const DecToBin = dec => {
      let decimal = dec.toString()
      var bin = (+decimal).toString(2)
      return bin
    }

    this.setState({
      dec: maskForNumber(e.target.value),
      bin: DecToBin(e.target.value),
    })
  }

  _handleChangeBinToHex = e => {
    var ConvertBase = function(num) {
      return {
        from: function(baseFrom) {
          return {
            to: function(baseTo) {
              return parseInt(num, baseFrom).toString(baseTo)
            },
          }
        },
      }
    }
    const binToHex = num => {
      return ConvertBase(num)
        .from(2)
        .to(16)
    }

    const maskForNumber = e => {
      let newVal = e.replace(/^[2-9]+$/g, "").replace(/\D/g, "")
      return newVal
    }

    this.setState({
      binHex: maskForNumber(e.target.value),
      hex: binToHex(e.target.value ? e.target.value : 0),
    })
  }

  _handleChangeHexToBin = e => {
    var ConvertBase = function(num) {
      return {
        from: function(baseFrom) {
          return {
            to: function(baseTo) {
              return parseInt(num, baseFrom).toString(baseTo)
            },
          }
        },
      }
    }
    const HexToBin = num => {
      return ConvertBase(num)
        .from(16)
        .to(2)
    }

    this.setState({
      binHex: HexToBin(e.target.value ? e.target.value : 0),
      hex: e.target.value,
    })
  }

  _handleClickRevertBinToDec = e => {
    this.setState({
      revertBinToDec: !this.state.revertBinToDec,
    })
  }

  _handleClickRevertBinToHex = e => {
    this.setState({
      revertBinToHex: !this.state.revertBinToHex,
    })
  }

  render() {
    return (
      <S.ContentWrapper>
        {!this.state.revertBinToDec && (
          <LightSpeedIn>
            <S.ConvertWrapper>
              <S.SubTitle>Binary to Decimal</S.SubTitle>
              <S.FormWrapper>
                <S.InputStyled
                  type="text"
                  value={this.state.bin}
                  onChange={this._handleChangeBin}
                  placeholder="Entre com 0 ou 1"
                  min="0"
                  maxLength="8"
                  name="binary"
                />
                <S.IconRevert
                  onClick={this._handleClickRevertBinToDec}
                  width="32"
                />
                <S.ResultStyled
                  type="text"
                  disabled
                  min="0"
                  value={this.state.dec}
                  placeholder="Decimal"
                  name="decimal"
                />
              </S.FormWrapper>
            </S.ConvertWrapper>
          </LightSpeedIn>
        )}
        {this.state.revertBinToDec && (
          <LightSpeedIn>
            <S.ConvertWrapper>
              <S.SubTitle>Decimal to Binary</S.SubTitle>
              <S.FormWrapper>
                <S.InputStyled
                  type="text"
                  value={this.state.dec}
                  onChange={this._handleChangeDec}
                  placeholder="Entre com um número decimal"
                  min="0"
                  maxLength="8"
                  name="decimal"
                />
                <S.IconRevert
                  onClick={this._handleClickRevertBinToDec}
                  width="32"
                />
                <S.ResultStyled
                  type="text"
                  disabled
                  min="0"
                  value={this.state.bin}
                  placeholder="Binário"
                  name="binary"
                />
              </S.FormWrapper>
            </S.ConvertWrapper>
          </LightSpeedIn>
        )}

        {!this.state.revertBinToHex && (
          <LightSpeedIn>
            <S.ConvertWrapper>
              <S.SubTitle>Binary to Hexadecimal</S.SubTitle>
              <S.FormWrapper>
                <S.InputStyled
                  type="text"
                  value={this.state.binHex}
                  onChange={this._handleChangeBinToHex}
                  placeholder="Entre com 0 ou 1"
                  min="0"
                  name="binary"
                />
                <S.IconRevert
                  onClick={this._handleClickRevertBinToHex}
                  width="32"
                />
                <S.ResultStyled
                  type="text"
                  disabled
                  min="0"
                  value={this.state.hex}
                  placeholder="Hexadecimal"
                  name="hexadecimal"
                />
              </S.FormWrapper>
            </S.ConvertWrapper>
          </LightSpeedIn>
        )}
        {this.state.revertBinToHex && (
          <LightSpeedIn>
            <S.ConvertWrapper>
              <S.SubTitle>Hexadecimal to Binary</S.SubTitle>
              <S.FormWrapper>
                <S.InputStyled
                  type="text"
                  value={this.state.hex}
                  onChange={this._handleChangeHexToBin}
                  placeholder="Entre com um Hexadecimal"
                  name="hexadecimal"
                />
                <S.IconRevert
                  onClick={this._handleClickRevertBinToHex}
                  width="32"
                />
                <S.ResultStyled
                  type="text"
                  disabled
                  value={this.state.binHex}
                  placeholder="Binário"
                  name="binario"
                />
              </S.FormWrapper>
            </S.ConvertWrapper>
          </LightSpeedIn>
        )}
      </S.ContentWrapper>
    )
  }
}
