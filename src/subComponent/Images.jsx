import R1 from '../assets/r1.png'
import R2 from '../assets/r2.png'
import R3 from '../assets/r3.png'
import R4 from '../assets/r4.png'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './image.css'

export default function Image(){
    const subRef = useRef();

    const {contextSafe} = useGSAP({
        scope: subRef
    });

    const zoomIn = contextSafe((e) => {
        gsap.to(e.currentTarget,{
          scale: 1.05,
          duration: 0.1,
          ease:"power1.out"
        })
      })
    
      const zoomOut = contextSafe((e) => {
        gsap.to(e.currentTarget,{
          scale: 1,
          duration: 0.1,
          ease:"power1.out"
        })
      })

    return (
        <div ref={subRef}>
            <div id="imageGallery">
                <div id="card1" className='card' onMouseEnter={zoomIn} onMouseLeave={zoomOut} ><img style={{pointerEvents: "none"}} src={R1}/></div>
                <div id="card2" className='card' onMouseEnter={zoomIn} onMouseLeave={zoomOut} ><img style={{pointerEvents: "none"}} src={R2}/></div>
                <div id="card3" className='card' onMouseEnter={zoomIn} onMouseLeave={zoomOut} ><img style={{pointerEvents: "none"}} src={R3}/></div>
                <div id="card4" className='card' onMouseEnter={zoomIn} onMouseLeave={zoomOut} ><img style={{pointerEvents: "none"}} src={R4}/></div>
            </div>
        </div>
    );
}