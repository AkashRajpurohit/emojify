import React from 'react'
import EmojiContext from '../EmojiContext'

const EmojiTextBox = props => (
  <EmojiContext.Consumer>
    {data => (
      <textarea {...props} value={"Hello World smile".replace('smile', data.emojis.smile)} rows="10" cols="50" />
    )}
  </EmojiContext.Consumer>
)

export default EmojiTextBox
