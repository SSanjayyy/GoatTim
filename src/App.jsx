import { useState } from 'react'
import Door from './components/Door'
import ThanksPage from './components/ThanksPage'
import './App.css'

function App() {
  const [showThanks, setShowThanks] = useState(false)
  const [doorRefresh, setDoorRefresh] = useState(0)

  const handleCorrectAnswer = () => {
    setShowThanks(true)
  }

  const handleGoBack = () => {
    setShowThanks(false)
    setDoorRefresh(doorRefresh + 1)
  }

  return (
    <div className="app">
      {!showThanks ? (
        <Door key={doorRefresh} refreshTrigger={doorRefresh} onCorrectAnswer={handleCorrectAnswer} />
      ) : (
        <ThanksPage onGoBack={handleGoBack} />
      )}
    </div>
  )
}

export default App
