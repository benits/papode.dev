import React from "react"
import axios from "axios"
import _ from "underscore"

import * as S from "./styled"
import ListCard from "../ListCard"

export default class Gitfolio extends React.Component {
  state = {
    repository: [],
  }
  componentDidMount() {
    const api = axios.create({
      baseURL: "https://api.github.com/",
    })

    const reposData = async () => {
      const response = await api.get("users/benits/repos")
      const reorder = _.sortBy(response.data, "updated_at", function(num) {
        return num
      })
      this.setState({
        repository: reorder.reverse(),
      })
    }

    reposData()
  }

  render() {
    const repos = this.state.repository

    return (
      <S.ContentWrapper>
        <S.Title>GitFolio</S.Title>
        <S.Description>
          Bem vindo! ao meu gitfolio, aqui você consegue ver todos meus
          repositorios do github.
        </S.Description>
        <S.Description>Fique a Vontade!</S.Description>

        <ListCard repository={repos} />
      </S.ContentWrapper>
    )
  }
}
