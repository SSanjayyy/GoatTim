import { useState, useEffect } from 'react';
import '../styles/Door.css';

const QUESTIONS = [
  {
    question: "What is Tim's favorite way to spend a Friday afternoon?",
    correctAnswers: ['Chill', 'relaxing', 'chilling', 'relax'],
    hint: "He's super chill!"
  },
  {
    question: "Tim is going to a new job. What are we saying goodbye to?",
    correctAnswers: ['Tim', 'boss', 'colleague', 'coworker'],
    hint: "Think about who's leaving..."
  }
];

export default function Door({ onCorrectAnswer }) {
  const [answer, setAnswer] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Pick a random question on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
    setCurrentQuestion(QUESTIONS[randomIndex]);
  }, []);

  if (!currentQuestion) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedAnswer = answer.toLowerCase().trim();
    
    if (currentQuestion.correctAnswers.includes(normalizedAnswer)) {
      setShowError(false);
      setIsOpen(true);
      setTimeout(() => {
        onCorrectAnswer();
      }, 2000);
    } else {
      setShowError(true);
      setAnswer('');
    }
  };

  return (
    <div className="door-page">
      {/* Floating Sun Background */}
      <div className="floating-sun"></div>

      {/* Main Container */}
      <div className="door-wrapper">
        {/* Terminal Window Header */}
        <div className="terminal-header">
          <div className="window-title">
            <span className="window-dot dot-magenta"></span>
            <span className="window-dot dot-cyan"></span>
            <span className="window-dot dot-orange"></span>
            <span className="title-text"> UNLOCK_FAREWELL.exe</span>
          </div>
        </div>

        {/* Door Section */}
        <div className="door-section">
          <div className="door-outer-frame">
            {/* Left Frame Casing */}
            <div className="frame-casing frame-left">
              <div className="frame-panel"></div>
            </div>

            {/* Top Frame Casing */}
            <div className="frame-casing frame-top">
              <div className="frame-panel"></div>
            </div>

            {/* Right Frame Casing */}
            <div className="frame-casing frame-right">
              <div className="frame-panel"></div>
            </div>

            {/* Main Door */}
            <div className="door-frame">
              <div className={`door ${isOpen ? 'open' : ''}`}>
                {/* Door Left Half */}
                <div className="door-left">
                  <div className="door-panel-container">
                    {/* Top Raised Panel */}
                    <div className="door-panel door-panel-top">
                      <div className="panel-inner"></div>
                      <div className="panel-glow"></div>
                    </div>
                    {/* Middle Raised Panel */}
                    <div className="door-panel door-panel-middle">
                      <div className="panel-inner"></div>
                      <div className="panel-glow"></div>
                    </div>
                    {/* Bottom Raised Panel */}
                    <div className="door-panel door-panel-bottom">
                      <div className="panel-inner"></div>
                      <div className="panel-glow"></div>
                    </div>
                  </div>
                </div>

                {/* Door Right Half */}
                <div className="door-right">
                  <div className="door-panel-container">
                    {/* Top Raised Panel */}
                    <div className="door-panel door-panel-top">
                      <div className="panel-inner"></div>
                      <div className="panel-glow"></div>
                    </div>
                    {/* Middle Raised Panel */}
                    <div className="door-panel door-panel-middle">
                      <div className="panel-inner"></div>
                      <div className="panel-glow"></div>
                    </div>
                    {/* Bottom Raised Panel */}
                    <div className="door-panel door-panel-bottom">
                      <div className="panel-inner"></div>
                      <div className="panel-glow"></div>
                    </div>
                  </div>
                </div>

                {/* Hinges on Left Side */}
                <div className="hinge hinge-top"></div>
                <div className="hinge hinge-middle"></div>
                <div className="hinge hinge-bottom"></div>

                {/* Door Handle/Knob */}
                <div className="door-knob-assembly">
                  <div className="door-knob">
                    <div className="knob-inner"></div>
                  </div>
                  <div className="keyhole"></div>
                </div>

                {/* Door Light Glow */}
                <div className="door-light"></div>
              </div>
            </div>

            {/* Door Bottom Threshold */}
            <div className="door-threshold"></div>
          </div>
        </div>

        {/* Question Box */}
        <div className="question-container">
          <div className="question-label"> QUESTION:</div>
          <h2 className="question-text">{currentQuestion.question}</h2>

          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-group">
              <span className="input-prefix"></span>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="ENTER_ANSWER..."
                className={`terminal-input ${showError ? 'error' : ''}`}
                disabled={isOpen}
                autoFocus
              />
            </div>

            <button 
              type="submit" 
              className="unlock-button"
              disabled={isOpen}
            >
              <span className="button-text">▶ UNLOCK DOOR</span>
            </button>
          </form>

          {showError && (
            <div className="error-box">
              <span className="error-prefix"> ERROR:</span>
              <p className="error-message">NOT_QUITE_RIGHT | {currentQuestion.hint}</p>
            </div>
          )}

          {isOpen && (
            <div className="success-box">
              <span className="success-prefix"> SUCCESS:</span>
              <p className="success-message">DOOR_OPENING...</p>
            </div>
          )}
        </div>
      </div>

      {/* Perspective Grid Background */}
      <div className="perspective-grid"></div>
    </div>
  );
}
