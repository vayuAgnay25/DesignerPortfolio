import R1 from '../assets/r1.png'
import R2 from '../assets/r2.png'
import R3 from '../assets/r3.png'
import R4 from '../assets/r4.png'
import './image.css'
export default function Image(){
    return (
        <>
            <div id="imageGallery">
                <div id="card1" className='card'><img src={R1}/></div>
                <div id="card2" className='card'><img src={R2}/></div>
                <div id="card3" className='card'><img src={R3}/></div>
                <div id="card4" className='card'><img src={R4}/></div>
            </div>
        </>
    );
}