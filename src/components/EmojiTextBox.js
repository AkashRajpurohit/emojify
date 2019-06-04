import React, { useState } from 'react'
import EmojiContext from '../EmojiContext'

const EmojiTextBox = props => {
  const [text, setText] = useState('Hello 🌐!')
  const emojify = data => {
    const emojifiedText = text
      .split(' ')
      .map(word => data.emojis[word.toLowerCase()] || word)
      .join(' ')
    setText(emojifiedText)
  }
  return (
    <EmojiContext.Consumer>
      {data => (
        <textarea
          {...props}
          value={text}
          rows="10"
          cols="50"
          onKeyUp={({ keyCode }) => {
            if (keyCode === 32) {
              emojify(data)
            }
          }}
          onChange={e => setText(e.target.value)}
        />
      )}
    </EmojiContext.Consumer>
  )
}

export default EmojiTextBox
