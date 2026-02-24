import {
  SvgFilterDefs,
  ParallaxController,
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
  PressedLeafBadge,
  FooterSeal,
  WatercolorBlob,
  ArchedFrame
} from './DecorativeElements'
import '../styles/ThanksPage.css'

export default function ThanksPage({ onGoBack }) {
  const notes = [
    {
      name: 'Zach',
      message: 'Tim, you are a fantastic supervisor. I’ve been trying to work under your leadership for three years now, and I’m so glad I finally got the experience of being both your friend and your subordinate. You always give fantastic advice, and it is always clear how much you care about everyone around you. I’m proud of you for taking a step back this year and having the initiative to move up in the world. You’re going to do great things, and you’re going to make an impact on so many people’s lives.'
    },
    {
      name: 'Gavin',
      message: 'In a short span of knowing and being under your howlumns staff, it has been filled with fun, laughter and vibes. You have been a great mentor and support system for me in the RA role. You’ve also been a great supervisor and a friend. Keep being great king, and spreading that light, you’re the Goat. Thank you for all you do, and remember God always has a plan for you. …….Keep in contact, I’ll see you around campus'
    },
    {
      name: 'Jaylin',
      message: 'Your leadership made a real difference for all of us. I am grateful for the way you showed up.'
    },
    {
      name: 'Adam',
      message: 'our nonchalant, pickleball master, cultured, almost reality tv star, caring king. You’ve been the most relatable and cool CC I’ve had. Thank you for making my last year as an RA such a good one. Glad to see you succeeding and hope you have many future blessings.'
    },
    {
      name: 'Nia',
      message: 'Hey Tim thank you so much for your support and the laughs that we share, although it’s bittersweet to see you leave I am so proud of you, continue getting it done and hooting and hollering on the side 😉'
    },
    {
      name: 'David',
      message: 'I can’t say “thank you, kindly!” enough for the support, supervision, and joy you have provided in my life, Tim! With this next chapter, and wherever else your path may take you, I hope you continue to be amazing.'
    },
    {
      name: 'Jes',
      message: 'Cheese, You have been an incredible supervisor and mentor during my time on Howlumns. Whether it’s RA stuff or personal stuff, I know that I’ve got you in my corner and that I can always come to you for anything I need. You are so sweet, caring and understanding, and that really shows in your leadership and supervision style. I will miss our inside jokes and heartfelt conversations dearly, but I am excited to hear how you grow in your new role. Even though this departure is bittersweet, I hope that you look back on this time and remember all the fond memories we all shared. Best, Jes (il Cheese)'
    },
    {
      name: 'Peyton',
      message: 'Message for my GOAT Timothy Turner boy o boy where do I even begin. You are the light to my darkness, the shoe to my foot, and the poop to my pee. Tim you have actually been such an amazing role model in the RA position and I will never look at the job the same after you leave. You will be missed by everyone and the impact you have made on all of our lives will never be forgotten!” Daddy Peyton'
    },
    {
      name: 'Mbah',
      message: 'Hey King! I’m going to be completely honest here when I say that I will miss you. You have made such an impact in my life, and you’ve been there for me in times where no one else was. Even though you aren’t completely gone from Ksu, it pains me that you won’t be leading Howlumns and being around as often. However, I won’t let this all distract me from giving you your flowers in all this. You leveled up, and I am proud of you for acheiving this new position. You always have been a great shine of positive energy, and I just hope that as you take on your new role, the people around you will realize and appreciate that as much as I do. May God continue to lead and bless you in your life. You’re just too tuff." -Mbah'
    },
    {
      name: 'Daniel',
      message: 'Great working with you, Tim. Excited to see everything you build next.'
    },
    {
      name: 'Nari',
      message: 'You made work feel meaningful. Thank you for investing in all of us.'
    },
    {
      name: 'Tommy',
      message: 'Hi Tim! I was legitimately sad when I heard that you were leaving 🙁 You have been a really wonderful boss and I couldn’t have asked for a more supportive role model to look up to. You’ve seen me at my lows and my highs and you’ve been an amazing person all throughout. You’re a great boss, a great friend, and oh so supple. Good luck Tim, I hope to see you around 🫡'
    },
    {
      name: 'Sanjay',
      message: 'Best of luck in your new role. You have been an excellent leader and mentor. Best of luck in your new role. You have been an excellent leader and mentor. Best of luck in your new role. You have been an excellent leader and mentor. Best of luck in your new role. You have been an excellent leader and mentor.'
    },
    {
      name: 'Julian',
      message: 'Dear Tim, there have been a lot of laughs, and shared frustrations. Thank you for the two years of support and encouragement. You have made the RA role enjoyable. I’m glad to see you climb the corporate ladder! Stay safe and keep me updated on the health and wellness journey. Stay safe!'
    },
    {
      name: 'AJ',
      message: 'Timmmm My Handsome Kingggg, I just want you to know how grateful I am for being in a staff with you in it, You really made me feel included when times I didn’t, and even tho it was jus one year with us really working together, I loved every experience that one year had to other since you were in it, I’m really happy your leaving and achieving better nd bigger things, but really sad that I couldn’t have at least one more year with the best CC…, But what I want u to keep in mind is to always keep God first and your path for greatness will be clearer nd clearer, We love you King and wish nothing but the best for you, and we’ll always be here in your back corner if needed.'
    },
    {
      name: 'Aidan',
      message: 'Thank you for supporting the team so well. I hope this next chapter treats you well.'
    },
    {
      name: 'Damian',
      message: 'Tim you were a great CC, and I’m happy to be seeing you move up in the ranks and I hope that your future is bright'
    },
    {
      name: 'Lily Desta',
      message: 'HEYY Timmy Turner! 🤩You’re a great CC even though I wasn’t on your staff, I had a blast living in Howell. I lowkeyyy remember the first time I met you which I think was Howell hall last year and I had noooo idea that you lived right next to the lobby (soo sorry for my friend group and I being loud in the lobby in the middle of the night 😃) and from there I just knew you are a chil, FUNNY, cool person. Honestly you never fail to make me laugh. I hate to see you go but gotta move on sometime right 😂. I hope your new position is as cool as you are and you have a great time (not as much as a great time it is on Marietta of course). Well anyways don’t be lame and not visit us here. Much love 💕🫶🏽 P.S. I FOUND YOUR TIKTOK ACCOUNT 😭'
    },
    {
      name: 'Varun',
      message: 'Tim… you’re soo tuff twin. Jk but thank you for being such a great boss and mentor. You changed the way I thought about the workplace and made me really fall in love with the RA role. I’m gonna miss our 1:1s but on to bigger and better things !'
    },
    {
      name: 'Jordan',
      message: 'You have made a lasting impact on us. Wishing you confidence and calm in the new role.'
    },
    {
      name: 'Mark',
      message: 'Thanks, Tim. Wishing you a smooth transition and a lot of success.'
    },
    {
      name: 'Nathan',
      message: 'Thank you for your leadership and steady support. Best wishes for what is next.'
    },
    {
      name: 'Hannah',
      message: 'You made the team stronger and kinder. Grateful for the chance to work with you.'
    },
    {
      name: 'Kenzie',
      message: 'Thanks for all the guidance and trust. I know you will do great things ahead.'
    },
    {
      name: 'Alexis',
      message: 'HEY TIMMY T!!!! It’s your favorite Floridian Alexis ☀️🌴. I’m already miss sitting in your office complaining about the work you gave me, our endless laughs, random dances, pickleball games, and elite rant sessions. Truly unmatched girl time. You will absolutely be at my future wedding!!! I’m so glad you were my CC because I genuinely can’t imagine anyone else making my RA experience better. You made it fun, supportive, and something I’ll always be grateful for. I’m also glad you’re getting (somewhat) released from the chains of Housing as its quality rapidly declining 😭 Even if you’re not fully free! Side note: Manon leaving Katseye?? We would’ve needed a full office debrief. I love you so much and I’ll miss you always. 💛'
    },
    {
      name: 'Erick',
      message: 'Hey Tim, I want to say being on your staff was a great way to enter residence and housing life and I feel like I really grew into a better person having a leader who is kind and considerate of the people following him. I look forward to the day you reach your goal of Dean and want you to know your efforts and actions have not gone unappreciated, your a great person and deserves the best🙏❤️!!'
    },
    {
      name: 'Jazmin',
      message: 'Tim, My brother! I am super excited for these next chapter of yours. You are going to kill it❤️'
    },
    {
      name: 'Kessiny',
      message: 'Tim, Thank you so much for welcoming me to the team with open arms. You have been a pleasure to work with and to learn from. I wish all the best in your new role! You will always have a lifetime membership to ADHD Inc. LOL'
    },
    {
      name: 'Tre',
      message: 'You will be remembered with a lot of respect. Wishing you a bright path forward.'
    },
    {
      name: 'Josh Burns',
      message: 'Tim, I want to wish you a huge congratulations on your new position in HRL! I am one of many who are proud and excited to see what you do for the KSU housing community. I am grateful to have you as a colleague and friend. Sending you all the best, and just know I am here for you. Best, Josh Burns'
    }
  ]

  return (
    <div className="thanks-page">
      <SvgFilterDefs />
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
      <WatercolorBlob className="thanks-blob-left" />
      <WatercolorBlob className="thanks-blob-right" />

      <header className="thanks-header card-fade-in">
        <p className="thanks-kicker">With gratitude</p>
        <h1>Messages for Tim</h1>
        <AnimatedUnderline className="hero-underline" />
        <p className="thanks-subtitle">
          A small scrapbook of appreciation from the team, gathered with care.
        </p>
      </header>
      <SignpostDivider />
      <VineDivider />

      <main className="thanks-notes-container">
        {notes.map((note, index) => (
          <article key={`${note.name}-${index}`} className="note-card card-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <ArchedFrame className="note-arched-frame">
              <div className="note-inner">
                <PressedLeafBadge className="note-badge" />
                <p className="note-meta">{new Date().getFullYear()} farewell note</p>
                <h2 className="note-name">{note.name}</h2>
                <p className="note-message">{note.message}</p>
              </div>
            </ArchedFrame>
          </article>
        ))}
      </main>

      <footer className="thanks-footer card-fade-in">
        <FooterSeal />
        <p className="thanks-farewell">Thank you for everything, and good luck in your new chapter.</p>
        <button onClick={onGoBack} className="back-to-door-btn wax-seal-btn petal-burst-btn">
          Back to the door
        </button>
      </footer>
    </div>
  )
}
