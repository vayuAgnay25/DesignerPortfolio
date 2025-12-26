import { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.svg';
import rainyProfile from './assets/rainyProfile.png';
import note from './assets/note.svg';
import T1 from './assets/Timeline2.svg';
import S1 from './assets/story.svg';
import Story from './subComponent/story.jsx';
import TimeLine from './subComponent/timeline.jsx';
import Image from './subComponent/Images.jsx';
import Work from './subComponent/Work.jsx'
import HoverImages from "./subComponent/HoverImages.jsx"

import './App.css';

function App() {
  // --- STATES ---
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('story'); // "story" ya "timeline"

  const mainRef = useRef(null);
  const cursorRef = useRef(null);

  // --- CLOCK LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1 sec update taaki time "slow" na lage

    return () => clearInterval(timer); // Cleanup
  }, []);

  // Time formatting (HH:MM)
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');

  return (
    <div ref={mainRef}>
      <div ref={cursorRef} id='cursor'></div>

      {/* NAVIGATION SECTION */}
      <div id="nav">
        <div id="time">
          <img src={logo} alt="logo" />
          <p>
            {`${hours}:${minutes} `}
            <span>IST</span>
          </p>
        </div>
        <div id="link">
          <ul>
            <li><a href="#page2">story</a></li>
            <li><a href="#page7">work</a></li>
            <li><a href="#capture">captures</a></li>
          </ul>
        </div>
        <div id="GIT">
          <a href="#mail">get in touch</a>
        </div>
      </div>

      {/* PAGE 1: HERO */}
      <div id="page1" className="pageBunch">
        <div className="layer">
          <div className="paragraph">
            <h1>I'm Rainy.</h1><br />
            <p>I'm a Senior UX Designer at MAQ Software, shaping digital journeys that help people explore, discover, and interact with products more effortlessly.</p>
          </div>
          <img id="rainyProfile" src={rainyProfile} alt="Profile" />
          <img id="notepad" src={note} alt="Note" />
        </div>
      </div>

      {/* PAGE 2: ABOUT SECTION */}
      <div id="page2" className="pageBunch">
        <div className="paragraph">
          <div className="aboutLine">
            <p>about</p>
            <div className="buttonSwitch">
              <button
                onClick={() => setActiveTab('story')}
                className={activeTab === 'story' ? 'active' : ''}
                id="story"
              >
                <img src={S1} alt="" /> Story
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={activeTab === 'timeline' ? 'active' : ''}
                id="timeline"
              >
                <img src={T1} alt="" /> Timeline
              </button>
            </div>
          </div>

          {/* DYNAMIC COMPONENT SWITCHING */}
          <div className="aboutContent">
            {activeTab === 'story' ? <Story /> : <TimeLine />}
            <Image />
          </div>
        </div>
      </div>

      {/* OTHER PAGES */}
      <div id="page3" className="pageBunch">
        <iframe
          src="https://camera-psi-eight.vercel.app/"
          frameborder="0"
          allow='camera;microphone'
        ></iframe>
      </div>
      <div id="page4" className="pageBunch">
        <div className="dive-deep">
          <h1>
            <span>Sometimes,</span>
            <span>I</span>
            <span>dive</span>
            <span>deep.</span>
          </h1>
          <p>
            I love exploring complex systems—design libraries or codebases, and breaking them down to understand what drives them. Discovering the “why” behind the “what” is what excites me.
          </p>
        </div>
      </div>
      <div id="page5" className="pageBunch">
        <div className="keep-simple">
          <h1>
            <span>And</span>
            <span>then,</span>
            <span>I</span>
            <span>just</span>
            <span>try</span>
            <span>to</span>
          </h1>
          <h2>
            <span>Keep</span>
            <span>it</span>
            <span>simple.</span>
          </h2>
          <p>
            Good design shouldn't scream for attention. It should just work, quietly and effectively.
          </p>
        </div>
      </div>
      <div id="page6" className='pageBunch'>
        {/* <HoverImages/> */}
      </div>
      <div id="page7" className='pageBunch'>
        <Work/>
      </div>
    </div>
  );
}

export default App;