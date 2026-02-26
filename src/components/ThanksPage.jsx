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
      message: 'Tim, I am glad that I was chosen to be an RA in Howell this year and that I got to work under an amazing CC. Because of your support and help I was an able to grow not only as an RA but as a person. Thank you for all the support and help you have given me this semester, especially during my treatment. I know that you will do great at your new job. Daniel'
    },
    {
      name: 'Nari',
      message: 'Hey tim, I am so greatful to have experienced your leadership. You have taught me so much through so much patience that many wouldn’t have for me. though youre moving to your next step, dont forget the impact you have left on all of your p[as staff. Good luck soilder!!'
    },
    {
      name: 'Tommy',
      message: 'Hi Tim! I was legitimately sad when I heard that you were leaving 🙁 You have been a really wonderful boss and I couldn’t have asked for a more supportive role model to look up to. You’ve seen me at my lows and my highs and you’ve been an amazing person all throughout. You’re a great boss, a great friend, and oh so supple. Good luck Tim, I hope to see you around 🫡'
    },
    {
      name: 'Sanjay',
      message: 'Tim, the website name is accurate. I made this for you genuinely because you are the goat. Tim maaaan you have helped me with so much stuff, you got me though my whole situation ship 😭. And im fully healed now yay!! (Now lets talk about your situation with big H from KES lollll jkjk) But in all seriousness, there was stuff I could not tell to any of the people ik and you being there helped a lotttt. And man tim you are such a helpful person to not just me but to everyone involved in housing. Man I have so much stuff to say but I dont know if I can fit it all and I dont want to ramble 😭😭, but seriously you have a super power in talking to people and understanding them. Ik you will do super amazing in your new job I am 100% sure. I will really miss you tim, you have impacted my life and so many others in ways you cant even think of! Gooooaaaatttt'
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
      message: 'Tim, it was an honor working for you. You have been the most fun boss I could’ve had. I loved playing pickleball in our free time and running 5k’s together. The qt slushie runs are a classic, and your cookies and protein ice cream were a pretty awesome snack. Thanks for making this job less of a job and more of a family. I hope we still keep in touch across campuses either in the gaming server or playing pickleball. Thanks for all that you’ve done for howlumns and each RA that’s worked for you, you really have left an impact in our lives. Can I bring Timmy T to the picnic? No 😢 Well all miss you Tim!! -Aidan'
    },
    {
      name: 'Damian',
      message: 'Tim you were a great CC, and I’m happy to be seeing you move up in the ranks and I hope that your future is bright'
    },
    {
      name: 'Eli',
      message: 'Tim was probably the most fun CC I had the pleasure of working with. He was always kind and knew how to make the job enjoyable. Whether it was “therapy” sessions on Devin’s couch or coining the phrase “snappy cazh,” he brought so much energy to the housing office. I wish him all the best in his next endeavor; I know he’s going to light up his next workplace.'
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
      message: '“Tim you’ve been the best boss to so many people, I’m glad I’ve gotten to see you grow and hope you continue to spread your contagious comfortability everywhere you go”'
    },
    {
      name: 'Mark',
      message: 'Tim is tuffilicious.'
    },
    {
      name: 'Nathan',
      message: 'Thank you for your leadership and steady support. Best wishes for what is next.'
    },
    {
      name: 'Hannah',
      message: 'Hey Tim! I don’t even know where to start but just by stating how much love and care I have for you. I genuinely think we are the funniest people in the room if we are together! And even though you are such a big part of my RA/housing journey, you are even a bigger part of my personal life as you have been there in ways I can’t even begin to describe. I know with this role, you are going to be suchhhhh a busy woman but remember to stay loving life and to never change because you are rockstar :) Love Hannah'
    },
    {
      name: 'Kenzie',
      message: 'Thanks for all the guidance and trust. I know you will do great things ahead.'
    },
    {
      name: 'Jared',
      message: 'TIMMMMM. Hate to see you go but glad to see you moving up lol. But genuinely Tim, you have set the standard for what a good supervisor, mentor, and friend should look like in my life. When I sometimes lacked the confidence you’ve inspired and encouraged me to pursue opportunities and challenge myself to reach new heights. You’ve contributed a great amount to my growth as an RA, professional, and as a person. And I appreciate you for all of these things and more. I pray nothing but the best for you and that you receive continual blessings from this point on. Thank you and we love ya Tim 😛'
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
      name: 'Thomas Chavajay',
      message: 'To this day tim has been the most genuine leader i’ve ever had the opportunity to serve under, the way tim leads with a servants heart continues to inspire me to one day become a leader like he is. the chillest nicest and hardest working CC and the bestest friend - ex RA thomas'
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
      message: 'Tim! I’m really excited for you as you transition into this new role. Over the past three years, I’ve had the opportunity to watch you grow into the professional you are today. When you first started, you were a little bashful but genuinely excited to connect with students and learn the work. What I appreciate most is that that same excitement never left, even through football initiatives, new expectations, and a lot of staff transition. Last year especially, you did a lot to be proud of. After RELI, you came back focused and ready, and you didn’t just elevate your own community; you pushed yourself professionally in ways that encouraged others across our department to think bigger about our impact in the region. You’ve brought a calm, mature presence to the team while still being relatable and fun. That balance isn’t easy in an entry-level role that can be as demanding as this one. I’m proud of the CC you’ve become, and I’m looking forward to seeing how you continue to grow and lead as RSSM.'
    },
    {
      name: 'Darmon',
      message: 'Tim, what made you a unique CC was the fact that you did not just take your job seriously, but you also built up your staff with you as you moved upward. I was an RA for three years at KSU, and I constantly had to deal with performative people, attitudes, and activities that only served to glorify a system that did not truly appreciate the people that held it up. You were never afraid to work around and modify the system in place in order to respect the energy and time of your staff while teaching the skills needed for an RA’s future. I have so many memories of you supporting my journey, from helping me get accepted to Auburn to giving me dating advice. I hope your upward momentum does not stop here and you keep rising and changing things for the better! Sincerely, The God of Ants aka Darmon'
    },
    {
      name: 'Josh Burns',
      message: 'Tim, I want to wish you a huge congratulations on your new position in HRL! I am one of many who are proud and excited to see what you do for the KSU housing community. I am grateful to have you as a colleague and friend. Sending you all the best, and just know I am here for you. Best, Josh Burns'
    }
  ]
  const sortedNotes = [...notes].sort((a, b) => b.message.length - a.message.length)

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
        {sortedNotes.map((note, index) => (
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
