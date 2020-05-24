import React from "react"
import { CopyBlock, dracula } from "react-code-blocks"
import * as S from "./styled"

export default class ViewerBorderRadius extends React.Component {
  state = {
    borderRadiusLeftTop: 0,
    borderRadiusRightTop: 0,
    borderRadiusLeftBottom: 0,
    borderRadiusRightBottom: 0,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }
  render() {
    return (
      <S.ContentWrapper>
        <S.Title>Border Radius View - React / Styled Components</S.Title>
        <S.Description>
          O Border Radius Previewer permite que o usuário visualizar como os
          valores de raio da borda CSS3 afetam um elemento. A propriedade
          border-radius pode ter vários valores alterados. Visualize a aparência
          da forma ao alterar esses valores.
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
          <S.ItemLink
            href="https://github.com/benits/papode.dev/blob/master/src/pages/border-radius-viewer.js"
            target="__blank"
          >
            {" "}
            Border Radius Previewer
          </S.ItemLink>
        </S.Description>

        <S.CardWrapper>
          <S.BorderWrapper
            borderRadius={`${this.state.borderRadiusLeftTop}px ${this.state.borderRadiusRightTop}px ${this.state.borderRadiusRightBottom}px ${this.state.borderRadiusLeftBottom}px`}
          >
            <S.LeftWrapper>
              <S.InputStyled
                type="number"
                value={this.state.borderRadiusLeftTop}
                onChange={this._handleChange}
                placeholder="0px"
                min="0"
                name="borderRadiusLeftTop"
              />
              <S.InputStyled
                type="number"
                value={this.state.borderRadiusLeftBottom}
                onChange={this._handleChange}
                placeholder="0px"
                min="0"
                name="borderRadiusLeftBottom"
              />
            </S.LeftWrapper>
            <S.RightWrapper>
              <S.InputStyled
                type="number"
                value={this.state.borderRadiusRightTop}
                onChange={this._handleChange}
                placeholder="0px"
                min="0"
                name="borderRadiusRightTop"
              />
              <S.InputStyled
                type="number"
                value={this.state.borderRadiusRightBottom}
                onChange={this._handleChange}
                placeholder="0px"
                min="0"
                name="borderRadiusRightBottom"
              />
            </S.RightWrapper>
          </S.BorderWrapper>
        </S.CardWrapper>
        <CopyBlock
          text={`
border-radius: ${`${this.state.borderRadiusLeftTop}px ${this.state.borderRadiusRightTop}px ${this.state.borderRadiusRightBottom}px ${this.state.borderRadiusLeftBottom}px;`}
`}
          language="javascript"
          theme={dracula}
        />
        <S.SubTitle>Código React</S.SubTitle>
        <S.Description>
          Para facilitar a vida de todo mundo, eu adicionei o codigo do
          component React pronto usando Styled Component. É só Copiar/Colar e
          sair usando.
        </S.Description>
        <S.CodeWrapper>
          <S.CodeLeftWrapper>
            <S.SubTitle>BorderRadius.js</S.SubTitle>
            <CopyBlock
              text={`
import React from "react" 
import * as S from "./styled"
        
const BorderRadius = () => 
   <S.BorderRadius />
)
export default BorderRadius

`}
              language="jsx"
              theme={dracula}
            />
            <S.Code>
              {`
`}
            </S.Code>
          </S.CodeLeftWrapper>
          <S.CodeRightWrapper>
            <S.SubTitle>styled.js</S.SubTitle>
            <CopyBlock
              text={`
import styled from "styled-components"

export const BorderWrapper = styled.div\`
border-radius: ${`${this.state.borderRadiusLeftTop}px ${this.state.borderRadiusRightTop}px ${this.state.borderRadiusRightBottom}px ${this.state.borderRadiusLeftBottom}px;`}
background-color: #f8f8f2;
border: rgba(155,0,255,1) solid 1px;

height: 100%;
width: 100%;
\`;

`}
              language="javascript"
              theme={dracula}
            />
          </S.CodeRightWrapper>
        </S.CodeWrapper>
      </S.ContentWrapper>
    )
  }
}
