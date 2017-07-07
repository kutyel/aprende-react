import React from 'react'

const Hashtag = ({ text }) => (
  <a target='blank' href={`https://www.instagram.com/explore/tags/${text}`}>#{text}</a>
)

export default Hashtag
