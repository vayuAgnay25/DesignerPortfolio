import "./GaleryGrid.css";
import I1 from '../assets/Gallery/D1.jpg';
import I2 from '../assets/Gallery/D2.jpg';
import I3 from '../assets/Gallery/D3.jpg';
import I4 from '../assets/Gallery/D4.jpg';
import I5 from '../assets/Gallery/D5.jpg';
import I6 from '../assets/Gallery/D6.jpg';
import I7 from '../assets/Gallery/D7.jpg';
import I8 from '../assets/Gallery/D8.jpg';
import I9 from '../assets/Gallery/D9.jpg';
import I10 from '../assets/Gallery/D10.jpg';
import I11 from '../assets/Gallery/D11.jpg';
import I12 from '../assets/Gallery/D12.jpg';

const imageList = [I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12]

export default function Gallery() {
    return (
        <>
        <div id="captureLine">
            <div className="pGroup">
                <p>captures</p>
                <p>And also, I love photography</p>
            </div>
        </div>
        <div className="GaleryGrid" style={
            {
                gridTemplateRows: `repeat(${imageList.length/3},1fr)`
            }
        }>
            {
                imageList.map((image) =><div><img src={image} /></div>)
            }
        </div>
        </>
    )
}