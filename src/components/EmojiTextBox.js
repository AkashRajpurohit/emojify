import React, { useState } from 'react';
import EmojiContext from '../EmojiContext';

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
        <div className="form-group">
          <textarea
            {...props}
            value={text}
            className="form-control emoji-textbox"
            placeholder="Start emojifying your text...."
            rows="10"
            spellCheck={false}
            onKeyUp={e => {
              if (e.keyCode === 32 || e.keyCode === 13 || e.keyCode === 0) {
                emojify(data)
              }
            }}
            onChange={e => setText(e.target.value)}
          />
        </div>
      )}
    </EmojiContext.Consumer>
  )
}

export default EmojiTextBox
