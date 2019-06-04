import React, { useState } from 'react'
import EmojiContext from '../EmojiContext'

const EmojiTextBox = props => {
  const [text, setText] = useState('')

  const emojify = data => {
    const replaceLine = line =>
      line
        .split(' ')
        .map(word => {
          if (!word) return ''
          const emojis = data.emojis[word.toLowerCase()]
          if (emojis) {
            return emojis[Math.floor(Math.random() * emojis.length)]
          }
          return word
        })
        .join(' ')

    const emojifiedText = text
      .split('\n')
      .map(replaceLine)
      .join('\n')

    setText(emojifiedText)
  }

  return (
    <EmojiContext.Consumer>
      {data => (
        <textarea
          {...props}
          value={text}
          placeholder="Start emojifying your text...."
          rows="10"
          cols="50"
          onKeyUp={({ keyCode }) => {
            if (keyCode === 32 || keyCode === 13) {
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
