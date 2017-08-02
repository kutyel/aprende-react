import React from 'react'

const Mention = ({ user }) => (
  <a target='blank' href={`https://www.instagram.com/${user}`}>@{user}</a>
)

export default Mention
