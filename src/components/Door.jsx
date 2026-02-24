import { useMemo, useState } from 'react'
import {
  SvgFilterDefs,
  ParallaxController,
  FirstLoadIntro,
  FallingLeaves,
  FloatingMotes,
  PollenParticles,
  FloatingLanterns,
  IvyCornerFrame,
  WindTrails,
  BirdSilhouettes,
  BotanicalCorners,
  WildflowerSprigs,
  VineDivider,
  SignpostDivider,
  MouseVineTrail,
  AnimatedUnderline,
  HandDrawnBorder,
  MonogramBadge,
  WatercolorBlob,
  ArchedFrame
} from './DecorativeElements'
import '../styles/Door.css'

const RA_NAMES = [
  'Zach',
  'Gavin',
  'Jaylin',
  'Adam',
  'Nia',
  'David',
  'Jes',
  'Peyton',
  'Mbah',
  'Daniel',
  'Nari',
  'Tommy',
  'Sanjay',
  'Julian',
  'AJ'
]

const SAMPLE_QUIZ_QUESTIONS = RA_NAMES.map((name, index) => ({
  question: `Sample inside-joke Q${index + 1}: Which RA is this question about?`,
  correctAnswers: [name.toLowerCase()],
  hint: `Sample placeholder for ${name}'s inside joke.`
}))

const FINAL_QUESTION = {
  question: "Final question: Who's the GOAT of Howlumns?",
  correctAnswers: ['tim'],
  hint: "Starts with T."
}

const QUESTIONS = [...SAMPLE_QUIZ_QUESTIONS, FINAL_QUESTION]

export default function Door({ onCorrectAnswer }) {
  const [answer, setAnswer] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [showBurst, setShowBurst] = useState(false)
  const [showError, setShowError] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentQuestion = QUESTIONS[currentIndex]
  const totalQuestions = QUESTIONS.length
  const progressPercent = useMemo(
    () => ((currentIndex + 1) / totalQuestions) * 100,
    [currentIndex, totalQuestions]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalizedAnswer = answer.toLowerCase().trim()

    if (currentQuestion.correctAnswers.includes(normalizedAnswer)) {
      setShowError(false)

      const isLastQuestion = currentIndex === totalQuestions - 1
      if (isLastQuestion) {
        setShowBurst(true)
        setIsOpen(true)
        setTimeout(() => {
          setShowBurst(false)
        }, 1500)
        setTimeout(() => {
          onCorrectAnswer()
        }, 2600)
      } else {
        setCurrentIndex((prev) => prev + 1)
      }

      setAnswer('')
    } else {
      setShowError(true)
      setAnswer('')
    }
  }

  const handleSkipQuiz = () => {
    if (isOpen) return
    setShowError(false)
    setIsOpen(true)
    setTimeout(() => {
      onCorrectAnswer()
    }, 1200)
  }

  return (
    <div className="door-page">
      <SvgFilterDefs />
      <FirstLoadIntro />
      <ParallaxController />
      <FallingLeaves />
      <MouseVineTrail />
      <FloatingMotes />
      <PollenParticles />
      <FloatingLanterns />
      <IvyCornerFrame />
      <WindTrails />
      <BirdSilhouettes />
      <BotanicalCorners />
      <WildflowerSprigs />
      <WatercolorBlob className="door-blob-left" />
      <WatercolorBlob className="door-blob-right" />

      <div className="door-wrapper">
        <header className="door-hero card-fade-in reveal-item in-view">
          <p className="door-eyebrow">Autumn Note</p>
          <h1>Open the little cottage door</h1>
          <AnimatedUnderline className="hero-underline" />
          <p className="door-intro">
            A quiet thank-you space is waiting inside, with handwritten notes and warm memories.
          </p>
        </header>

        <section className="door-section card-fade-in reveal-item in-view">
          <div className="box-vine top-left" />
          <div className="box-vine top-right" />
          <div className="door-greenery left" />
          <div className="door-stage">
            <div className={`leaf-burst ${showBurst ? 'active' : ''}`} aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => {
                const angle = ((index + 1) / 16) * Math.PI * 2
                const x = Math.cos(angle) * 170
                const y = Math.sin(angle) * 130
                return (
                  <span
                    key={index}
                    className="burst-leaf"
                    style={{
                      '--burst-i': index,
                      '--burst-x': `${x}px`,
                      '--burst-y': `${y}px`
                    }}
                  />
                )
              })}
            </div>
            <div className={`door-backdrop ${isOpen ? 'visible' : ''}`}>
              <div className="door-rays" />
              <div className="backdrop-glow" />
              <p>Welcome in</p>
            </div>
            <div className={`cottage-door ${isOpen ? 'open' : ''}`}>
              <div className="door-inner-glow" />
              <MonogramBadge />
              <div className="door-plaque">Residence Life</div>
              <div className="door-planks">
                <div className="door-plank" />
                <div className="door-plank" />
                <div className="door-plank" />
              </div>
              <div className="door-bars">
                <span />
                <span />
              </div>
              <div className="door-knob" />
              <div className="door-sparkle one" />
              <div className="door-sparkle two" />
            </div>
          </div>
          <div className="door-greenery right" />
        </section>
        <SignpostDivider />
        <VineDivider />

        <section className="question-container card-fade-in reveal-item in-view">
          <HandDrawnBorder className="quiz-border" />
          <ArchedFrame>
            <div className="question-content">
              <p className="question-label">A small question</p>
              <div className="quiz-progress-wrap" aria-hidden="true">
                <p className="quiz-progress-text">
                  Question {currentIndex + 1} of {totalQuestions}
                </p>
                <div className="quiz-progress-track">
                  <span className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>
              <h2 className="question-text">{currentQuestion.question}</h2>

              <form onSubmit={handleSubmit} className="input-form">
                <label htmlFor="answerInput" className="visually-hidden">
                  Your answer
                </label>
                <input
                  id="answerInput"
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer"
                  className={`answer-input ${showError ? 'error' : ''}`}
                  disabled={isOpen}
                  autoFocus
                />

                <button type="submit" className="unlock-button wax-seal-btn petal-burst-btn" disabled={isOpen}>
                  {isOpen ? 'Opening...' : currentIndex === totalQuestions - 1 ? 'Unlock the door' : 'Next question'}
                </button>
              </form>

              {showError && (
                <div className="status-box status-error" role="status" aria-live="polite">
                  <p>Not quite. Hint: {currentQuestion.hint}</p>
                </div>
              )}

              {isOpen && (
                <div className="status-box status-success" role="status" aria-live="polite">
                  <p>Perfect. Stepping into the thank-you page...</p>
                </div>
              )}
            </div>
            <button type="button" className="skip-quiz-button wax-seal-btn petal-burst-btn" onClick={handleSkipQuiz} disabled={isOpen}>
              Skip quiz
            </button>
          </ArchedFrame>
        </section>
      </div>
    </div>
  )
}
