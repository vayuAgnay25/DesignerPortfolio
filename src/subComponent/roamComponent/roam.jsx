import './roamStyle.css'
import P1V from './roamAssets/roamCover.mp4'
import P4I2 from './roamAssets/roamP3.png'
import roamText from './roamAssets/roamText.svg'
import charLetter from './roamAssets/roamAa1.png'
import hat from './roamAssets/roamHat.png'
import P7I1 from './roamAssets/roam88.png'

/* [779,1528] window*/

export default function RoamMate() {
  document.title="Rainy | RoamMate"
  return (
    <div id="roamMain">
      <div id="roamPage1" className="roamPage">
        <video src={P1V} loop autoPlay muted playsInline></video>
      </div>
      <div id="roamPage2" className="roamPage">
        <div className="container">
          <img src={roamText} />
          <div id="small">
            <ul>
              <li id="li1">Project</li>
              <li id="li2">Client/Freelancing</li>
              <li id="li3">Project/Travel assistant app</li>
              <li id="li4">Category/Travel</li>
              <li id="li5">Date/2025</li>
            </ul>
          </div>
          <div id="intro">
            <p>Roamate is an AI-powered travel discovery and navigation app designed to help tourists explore a city confidently and effortlessly.</p>
            <p>It brings nearby tourist spots, cafés, adventure activities, and hotels into one place, using an interactive map with real-time crowd levels, safety insights, distance filters, and smart routing. </p>
          </div>
          <p id="bold">Smart local travel companion that helps you roam like a local, not a tourist.</p>
        </div>
      </div>
      <div id="roamPage3" className="roamPage">
        <div className="container"></div>
      </div>
      <div id="roamPage4" className="roamPage">
        <div className="container">
          <div id="box1"><img src={roamText} alt="" srcset="" /></div>
          <div id="box2"><img src={P4I2} alt="" srcset="" /></div>
          <div id="box3"><img src={P4I2} alt="" srcset="" /></div>
          <div id="box4"><img src={P4I2} alt="" srcset="" /></div>
        </div>
      </div>
      <div id="roamPage5" className="roamPage">
        <div className="container">
          <p id="typoColors">
            Typography & Colors
          </p>
          <div className="Q2">
            <ul id="ABCD">
            <li>ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
            <li>abcdefghijklmnopqrstuvwxyz</li>
            <li>1234567890.,;:’”/?  ABCabc123...</li>
            <li>Jost</li>
          </ul>
          </div>
          <ul id="tamap">
            <li>Travel.</li>
            <li>Assistance.</li>
            <li>Map-based.</li>
            <li>Adventure.</li>
            <li>Preferences.</li>
          </ul>
          <div className="img"><img src={charLetter} alt="" /></div>
        </div>
      </div>
      <div id="roamPage6" className="roamPage">
        <div className="container">
          <div id="image">
            <img src={hat} />
          </div>
          <div id="colorGrid">
            <div id="color1"></div>
            <div id="color2"></div>
            <div id="color3"></div>
            <div id="color4"></div>
          </div>
        </div>
      </div>
      <div id="roamPage7" className="roamPage">
        <div className="container">
          <img src={P7I1} />
          <div id="text">
            <p>
              Tourists in a new city struggle to find authentic places, assess safety and value, and compare stays, often jumping between multiple apps and sources. This leads to confusion, decision overload, and wasted time.
            </p>
            <div id="discover">
              <h1>Discover,eat & relax</h1>
              <p>Entire trip managed in one convenient app.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="roamPage8" className="roamPage"><div className="container"></div></div>
      <div id="roamPage9" className="roamPage">
        <div className="container">
          <div id="list">
            <ul id="TBSFA">
              <li>travelers</li>
              <li>backpackers</li>
              <li>students</li>
              <li>family</li>
              <li>adventure</li>
            </ul>
            <div id="image" />
          </div>
          <div id="how">
            <h1>How tourists currently discover?</h1>
            <p>Tourists often jumped between couple of applications, took screenshots to save places offline, and relied on locals or cafe staff for recommendations. Poor directions and lack of trusted reviews led to confusion, repeated routes, and hesitation in choosing local experiences.</p>
            <div id='image' />
          </div>
        </div>
      </div>
      <div id="roamPage10" className="roamPage">
        <div className="container">
          <div id="box1"></div>
          <div id="box2">
            <div id="depth">
              <h1>IN depth interviews</h1>
              <p>Understand how tourists discover places & make decisions while navigating a new city, including pain points around trust, safety, and convenience. This helped validate the need for a unified app to improve travel experiences.</p>
            </div>
            <a id="link">
              User interview script
            </a>
          </div>
        </div>
      </div>
      <div id="roamPage11" className="roamPage">
        <div id="C1" className="container"></div>
        <div id="C2" className="container"></div>
        <div id="C3" className="container"></div>
      </div>
      <div id="roamPage12" className="roamPage">
        <div className="container">
          <div id="box1">
            <ul>
              <li>AI Suggestions</li>
              <li>Category</li>
              <li>Quick Filters</li>
              <li>interactive maps</li>
              <li>itinerary</li>
              <li>local reviews</li>
              <li>AR Style</li>
            </ul>
            <div id='image' />
          </div>
          <div id="box2"></div>
        </div>
      </div>
      <div id="roamPage13" className="roamPage">
        <div className="container"></div>
      </div>
      <div id="roamPage14" className="roamPage">
        <div className="container">
          <div id="box1">
            <p>
              This immersive, <mark>AR-style</mark> trek visualization enhances spatial awareness and journey planning by overlaying a dashed route directly onto the mountain terrain, clearly showing switchbacks and elevation changes.
              <br /><br /> The destination pin marks a <mark>clear visual goal</mark>, while minimal UI elements keep the interface clean and focused.
              Semi-transparent stat cards display time and distance without blocking the scenery. <br /><br /> Overall, the visual mapping helps users better understand the terrain and mentally prepare for the trek, <mark>reducing cognitive load</mark> compared to traditional 2D maps.
            </p>
          </div>
          <div id="box2"></div>
        </div>
      </div>
      <div id="roamPage15" className="roamPage">
        <div className="container">
          <div id="box1"></div>
          <div id="box2">
            <div id="paragraph">
              <p>The feature enhances exploration through a <mark>radar-style</mark> proximity view that intuitively shows relative distances, paired with visual-first discovery using image thumbnails instead of pins. </p>
              <p>Dynamic focus states, contextual category filters, and clear distance markers make it easy for users to quickly understand what's nearby and decide where to go with minimal effort.</p>
            </div>
            <div id="yourTruely">
              <ul>
                <li>Radar-Style proximity</li>
                <li>spatial discovery</li>
                <li>clear distance markers</li>
                <li>contextual filtering</li>
                <li>date/ 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="roamPage16" className="roamPage">
        <div className="container">
          <div id="box1"></div>
          <div id="box2">
            <div id="logo">
              <div id="image" />
            </div>
            <div id="paragraph">
              <p>Using the destination photo as a full background creates an instant <mark>emotional connection</mark> while keeping the interface visually clean. Key details like price, location, and rating are neatly grouped at the bottom, allowing users to focus on the imagery without missing essential information</p>
              <p>The stacked card effect behind reviews subtly indicates swipe interaction, removing the <mark>need for explicit navigation</mark> buttons. Consistent display of reviewer name, date, and star rating builds trust through clear, standardized social proof.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="roamPage17" className="roamPage">
        <div className="container">
          <div id="box1">
            <div id="paragraph">
              <p>
                The interface uses a <mark>vertical timeline rail</mark> with connected nodes to visually represent the flow of activities throughout the day, clearly reinforcing the passage of time.
              </p>
              <p>
                A horizontal calendar strip at the top allows <mark>quick switching</mark> between dates while keeping the current day highlighted for context. 
              </p>
              <p>
                Rich itinerary cards enhance the experience by combining descriptions with visual elements like image thumbnails, helping users better <mark>visualize upcoming activities</mark>.
              </p>
            </div>
            <h1>
              Discover places, eat, adventure & book stays.
            </h1>
          </div>
          <div id="box2"></div>
        </div>
      </div>
      <div id="roamPage18" className="roamPage">
        <div className="container"></div>
      </div>
    </div>
  )
}