import React from "react"

import * as S from "./styled"

const ListCardHandOn = ({ projects }) => {
  return (
    <S.ContentWrapper>
      {projects.map((item, index) => (
        <S.ItemLink
          key={index}
          to={item.html_url}
          cover
          direction="center"
          duration={0.8}
          bg="var(--background)"
        >
          <S.CardWrapper>
            <S.Title>{item.name}</S.Title>
            <S.Description>{item.description}</S.Description>
            <S.TechsWrapper>
              <S.Wrapper>
                <S.SubTitle>Languages:</S.SubTitle>
                {item.language.map((item, index) => (
                  <S.ItemDescription key={index}>
                    {(index += 1)} - {item}
                  </S.ItemDescription>
                ))}
              </S.Wrapper>
              <S.Wrapper>
                <S.SubTitle>Technologies:</S.SubTitle>
                {item.tecnologies.map((item, index) => (
                  <S.ItemDescription key={index}>
                    {(index += 1)} - {item}
                  </S.ItemDescription>
                ))}
              </S.Wrapper>
              <S.Wrapper>
                <S.SubTitle>Libraries:</S.SubTitle>
                {item.libs.map((item, index) => (
                  <S.ItemDescription key={index}>
                    {(index += 1)} - {item}
                  </S.ItemDescription>
                ))}
              </S.Wrapper>
            </S.TechsWrapper>
          </S.CardWrapper>
        </S.ItemLink>
      ))}
    </S.ContentWrapper>
  )
}

export default ListCardHandOn
