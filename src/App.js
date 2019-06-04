import emojiJson from 'emoji.json'
import React from 'react'
import './App.css'
import EmojiTextBox from './components/EmojiTextBox'
import Footer from './components/Footer'
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
    <React.Fragment>
      <NavBar />
      <EmojiContext.Provider
        value={{
          emojis: emojis,
        }}
      >
        <div className="container mt-4">
          <h3 className="text-center">Convert Words to Emojis</h3>
          <EmojiTextBox />
        </div>
      </EmojiContext.Provider>
      <Footer />
    </React.Fragment>
  )
}

export default App
