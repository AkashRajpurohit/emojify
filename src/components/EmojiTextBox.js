import React, { useState } from 'react'
import EmojiContext from '../EmojiContext'

const EmojiTextBox = props => {
  const [text, setText] = useState('Hello World smile')
  return (
    <EmojiContext.Consumer>
      {data => (
        <textarea
          {...props}
          value={text}
          rows="10"
          cols="50"
          onChange={e => setText(e.target.value)}
        />
      )}
    </EmojiContext.Consumer>
  )
}

export default EmojiTextBox
