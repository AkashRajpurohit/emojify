import React from 'react'
import './App.css'
import EmojiTextBox from './components/EmojiTextBox'
import EmojiContext from './EmojiContext'

function App() {
  return (
    <div className="App">
      <h1>Emojify</h1>
      <EmojiContext.Provider
        value={{
          emojis: {
            smile: '🔥',
          },
        }}
      >
        <EmojiTextBox />
      </EmojiContext.Provider>
    </div>
  )
}

export default App
