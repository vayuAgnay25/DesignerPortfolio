import { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.svg';
import rainyProfile from './assets/rainyProfile.png';
import T1 from './assets/timeline2.svg';
import S1 from './assets/story.svg';
import Story from './subComponent/story.jsx';
import TimeLine from './subComponent/timeline.jsx';
import Image from './subComponent/Images.jsx';
import Work from './subComponent/Work.jsx'
import Gallery from "./subComponent/Galery.jsx";
import HoverImages from "./subComponent/HoverImages.jsx"
import gsap from 'gsap';
import Camera from './subComponent/Camera.jsx'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import RoamMate from './subComponent/roamComponent/roam.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const greetingList = ["Happy New Year,", "Hello,", "Namaste,", "Hola,", "Bonjour,", "Salaam,"];



  // --- STATES ---
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('story'); // "story" ya "timeline"
  const mainRef = useRef(null);
  const trigRef = useRef([]);
  const addtoRefs = (el) => {
    if (el && !trigRef.current.includes(el)) {
      trigRef.current.push(el);
    }
  }

  const { contextSafe } = useGSAP({
    scope: mainRef
  })

  const Page1animation = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      backgroundImage: `radial-gradient(circle 800px at ${e.clientX}px ${e.clientY}px,rgba(255,255,255,0.9),white)`,
    });
  })

  const upwardMove = contextSafe((e) => {
    console.log(e);
    gsap.to(e.currentTarget, {
      y: -10,
      duration: 0.3,
      ease: "power4.out",
      overwrite: "auto"
    });
  });

  const backToNormal = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });
  });



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');

  return (
    <div id='main' ref={mainRef}>
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
            <li>
              <a
                href="#page2"
                onClick={() => setActiveTab('story')}
                className={activeTab === 'story' ? 'active' : ''}
              >
                story
              </a>
            </li>
            <li>
              <a
                href="#page7"
                onClick={() => setActiveTab('work')}
                className={activeTab === 'work' ? 'active' : ''}
              >
                work
              </a>
            </li>
            <li>
              <a
                href="#page8"
                onClick={() => setActiveTab('captures')}
                className={activeTab === 'captures' ? 'active' : ''}
              >
                captures
              </a>
            </li>
          </ul>
        </div>
        <div id="GIT">
          <a
            href="#page9"
            onClick={() => setActiveTab('git')}
            className={activeTab === 'git' ? 'active' : ''}
          >
            get in touch
          </a>
        </div>
      </div>

      <div id="page1" className="pageBunch">
        <div onMouseMove={Page1animation} className="layer">

          <div className="paragraph">
            <div id="greetingList"><ul>
              {
                greetingList.map((greet) => <li>{greet}</li>)
              }
            </ul></div>
            <h1>I'm Rainy.</h1><br />
            <p onMouseEnter={upwardMove} onMouseLeave={backToNormal} >I'm a Senior UX Designer at MAQ Software, shaping digital journeys that help people explore, discover, and interact with products more effortlessly.</p><p>I love designing and building products.</p>
          </div>
          <img id="rainyProfile" src={rainyProfile} alt="Profile" />
        </div>
      </div>
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

          <div className="aboutContent">
            {activeTab === 'story' ? <Story /> : <TimeLine />}
            <Image />
          </div>
        </div>
      </div>

      <div id="page3" className="pageBunch">
        <Camera />
      </div>
      <motion.div
        whileInView={{
          backgroundColor: "#222222"
        }}
        onViewportLeave={{ backgroundColor: "#ffffff" }}
        id="page4"
        className=" pageBunch"
        ref={addtoRefs}
      >
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
      </motion.div>
      <div id="page5" className=" pageBunch">
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
      <div id="page6" ref={addtoRefs} className=' pageBunch'>
        <HoverImages />
      </div>
      <div id="page7" className=' pageBunch'>
        <Work />
      </div>
      <div id="page8" ref={addtoRefs} className=' pageBunch'>
        <Gallery />
      </div>
      <div id="page9" className=' pageBunch'>
        <div className="contactPage">
          <h1 id='CHead'>
            Ready to Start?
          </h1>
          <p id='CLine'>
            Let's create something amazing together. Drop me a line and let's get the conversation started.
          </p>
          <button id='contact'>
            get in Touch
          </button>
          <div className="buttons">
            <a href="" id="link2" className='linkedin'>
              <img src="" alt="" />
              <p>Linkedin</p>
            </a>
            <a href="" id="link3" className='behance'>
              <img src="" alt="" />
              <p>Behance</p>
            </a>
            <a href="" id="link1" className='dribble'>
              <img src="" alt="" />
              <p>Dribble</p>
            </a>
            <a href="" id="link4" className='mail'>
              <p>Gmail</p>
            </a>
          </div>
          <p id='location'>
            Dharamshala, India
          </p>
        </div>
      </div>
    </div>
  );
}

function Redirect(){
  useEffect(()=>{
    window.location.href = "https://www.figma.com/proto/ttC7Bz7NEpTWjdUPe7TJNI/Design-system---Images?page-id=0%3A1&node-id=5-61&viewport=7201%2C7315%2C0.06&t=JNtEx4iYCeLjMyeT-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=5%3A61&hide-ui=1"
  },[])

  return (<>
    <h1>Redirecting...</h1>
  </>)
}



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Main/>}/>
        <Route  path='/roamMate' element={<RoamMate/>}/>
        <Route  path= "/designSystem" element={<Redirect/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
};