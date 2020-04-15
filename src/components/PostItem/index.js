import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
  background,
}) => (
  <S.PostItemLink
    cover
    direction="right"
    duration={0.6}
    bg="var(--background)"
    to={slug}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura • Author -
          <S.PostItemAuthor> Matheus Benites</S.PostItemAuthor>
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
}

export default PostItem
