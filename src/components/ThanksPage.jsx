import '../styles/ThanksPage.css';

export default function ThanksPage({ onGoBack }) {
  const notes = [
    {
      name: "Zach",
      message: "Tim, thanks for being such an amazing boss. Best of luck on your new adventure! 🎉"
    },
    {
      name: "Gavin",
      message: "You made work fun and energetic. Thank you for everything! 🚀"
    },
    {
      name: "Jaylin",
      message: "Your leadership style inspired us all. Go crush it at your new gig! 💪"
    },
    {
      name: "Adam",
      message: "Thanks for the great memories and support. All the best in your next chapter! 🌟"
    },
    {
      name: "Nia",
      message: "You'll be missed! Excited to see what you do next. Goodbye and good luck! 🎊"
    },
    {
      name: "David",
      message: "It's been a pleasure working with you. Here's to new beginnings! 🌈"
    },
    {
      name: "Jes",
      message: "Thanks for being such a supportive boss. You're going to do amazing things! 💯"
    },
    {
      name: "Peyton",
      message: "Your chill vibe made our team better. All the best in your new job! 🎯"
    },
    {
      name: "Mbah",
      message: "Thank you for your leadership and kindness. Wishing you all the best! ✨"
    },
    {
      name: "Daniel",
      message: "It's been great working with you. Excited for your next adventure! 🚀"
    },
    {
      name: "Nari",
      message: "You made work enjoyable and meaningful. Good luck out there! 🌟"
    },
    {
      name: "Tommy",
      message: "Thanks for everything, Tim! You're going to crush it at your new place! 💪"
    },
    {
      name: "Sanjay",
      message: "Best of luck in your new role. You've been an awesome boss! 🎉"
    },
    {
      name: "Julian",
      message: "Thanks for the memories and guidance. Here's to new opportunities! 🌈"
    },
    {
      name: "AJ",
      message: "You'll be missed around here. Go do great things! 🚀"
    },
    {
      name: "Aidan",
      message: "Thanks for being such a supportive leader. All the best! 💯"
    },
    {
      name: "Lily",
      message: "It was great working under your leadership. Good luck! 🌟"
    },
    {
      name: "Varun",
      message: "Thanks for making work a better place. Excited for your future! ✨"
    },
    {
      name: "Jordan",
      message: "You've been amazing! Best wishes in your new adventure! 🎊"
    },
    {
      name: "Mark",
      message: "Thanks Tim! Here's to success in your new chapter! 🚀"
    },
    {
      name: "Nathan",
      message: "Thanks Tim! Here's to success in your new chapter! 🚀"
    },
    {
      name: "Hannah",
      message: "Thanks Tim! Here's to success in your new chapter! 🚀"
    },
    {
      name: "Kenzie",
      message: "Thanks Tim! Here's to success in your new chapter! 🚀"
    },
    {
      name: "Alexis",
      message: "You were an inspiration to us all. Good luck! 🌟"
    },
    {
      name: "Erick",
      message: "Thanks for everything. Wishing you all the best! 💪"
    },
    {
      name: "Jazmin",
      message: "It's been a pleasure working with you. All the best! 🌈"
    },
    {
      name: "Kessiny",
      message: "Thanks for being an awesome boss. Go do amazing things! ✨"
    },
    {
      name: "Tre",
      message: "You'll always be remembered fondly. Best of luck ahead! 🎉"
    }
  ];

  return (
    <div className="thanks-page">
      {/* Floating Sun */}
      <div className="thanks-floating-sun"></div>

      {/* Perspective Grid */}
      <div className="thanks-perspective-grid"></div>

      {/* Page Header */}
      <div className="thanks-header-section">
        <div className="thanks-header-line"></div>
        <h1 className="thanks-title">█ MESSAGES FROM THE CREW █</h1>
        <p className="thanks-subtitle"> farewell.messages_loaded</p>
        <div className="thanks-header-line"></div>
      </div>

      {/* Notes Grid */}
      <div className="thanks-notes-container" style={{ position: 'relative', zIndex: 10 }}>
        {notes.map((note, index) => (
          <div key={index} className="neon-card">
            <div className="card-header">
              <div className="card-corner card-corner-tl"></div>
              <span className="card-name">$ {note.name.toUpperCase()}</span>
              <div className="card-corner card-corner-tr"></div>
            </div>
            <div className="card-body">
              <p className="card-message">{note.message}</p>
            </div>
            <div className="card-footer">
              <div className="card-corner card-corner-bl"></div>
              <span className="card-timestamp">-- {new Date().getFullYear()}</span>
              <div className="card-corner card-corner-br"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="thanks-footer-section">
        <div className="thanks-footer-line"></div>
        <p className="thanks-farewell">
          GRATITUDE.overflow | STATUS: MIGRATION_SUCCESS ✓
        </p>
        <button onClick={onGoBack} className="back-to-door-btn">
          <span className="btn-corner">█</span> RETURN_TO_DOOR <span className="btn-corner">█</span>
        </button>
        <div className="thanks-footer-line"></div>
      </div>
    </div>
  );
}
