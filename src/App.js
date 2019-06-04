import emojiJson from 'emoji.json'
import React from 'react'
import './App.css'
import EmojiTextBox from './components/EmojiTextBox'
import EmojiContext from './EmojiContext'

const emojis = emojiJson.reduce((emojis, emoji) => {
  emoji.keywords.split('|').map(keyword => {
    return (emojis[keyword.trim()] = emoji.char)
  })
  return emojis
}, {})

function App() {
  return (
    <div className="App">
      <h1>Emojify</h1>
      <EmojiContext.Provider
        value={{
          emojis: emojis,
        }}
      >
        <EmojiTextBox />
      </EmojiContext.Provider>
    </div>
  )
}

export default App
