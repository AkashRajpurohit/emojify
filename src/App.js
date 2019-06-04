import emojiJson from 'emoji.json'
import React from 'react'
import './App.css'
import EmojiTextBox from './components/EmojiTextBox'
import NavBar from './components/NavBar'
import EmojiContext from './EmojiContext'

const emojis = emojiJson.reduce((emojis, emoji) => {
  emoji.keywords.split('|').map(keyword => {
    emojis[keyword.trim()] = emojis[keyword.trim()] || []
    return emojis[keyword.trim()].push(emoji.char)
  })
  return emojis
}, {})

function App() {
  return (
    <div className="App">
      <NavBar />
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
