import React from "react"

import * as S from "./styled"

export default class Gitfolio extends React.Component {
  render() {
    return (
      <S.ContentWrapper>
        {this.props.repository.map((item, index) => (
          <S.ItemLink
            key={index}
            href={item.html_url}
            target="__blank"
            rel="noopener noreferrer"
          >
            <S.CardWrapper>
              <S.Title>{item.name}</S.Title>
              <S.Wrapper>
                <S.DateDescription>
                  Criado em: {item.created_at.split("T", 1)}
                </S.DateDescription>
                <S.DateDescription>
                  Atualizado em: {item.updated_at.split("T", 1)}
                </S.DateDescription>
              </S.Wrapper>
              <S.Description>{item.description}</S.Description>
              <S.StatusWrapper>
                {!!item.language && (
                  <S.Wrapper>
                    <S.Code />
                    {item.language}
                  </S.Wrapper>
                )}
                <S.Wrapper>
                  <S.Starr />
                  {item.stargazers_count}
                </S.Wrapper>
                <S.Wrapper>
                  <S.Forks />
                  {item.forks_count}
                </S.Wrapper>
              </S.StatusWrapper>
            </S.CardWrapper>
          </S.ItemLink>
        ))}
      </S.ContentWrapper>
    )
  }
}
