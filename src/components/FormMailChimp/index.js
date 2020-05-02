import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import * as S from "./styled"

export default class FormMailChimp extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg
        }
        alert("Obrigado por se registrar na nossa NewsLetter!!!")
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return (
      <S.ContentWrapper>
        <S.Title>Fala Jovem! tudo bem com você?</S.Title>
        <S.Description>
          Assine nossa NewsLetter para ficar por dentro de todas novidades que
          eu lançar. Você vai receber direto no seu email.
        </S.Description>

        <S.FormWrapper onSubmit={this._handleSubmit}>
          <S.InputStyled
            type="text"
            onChange={this._handleChange}
            placeholder="name"
            name="name"
          />
          <S.InputStyled
            type="email"
            onChange={this._handleChange}
            placeholder="email"
            name="email"
          />
          <S.ButtonStyled type="submit" />
        </S.FormWrapper>
      </S.ContentWrapper>
    )
  }
}
