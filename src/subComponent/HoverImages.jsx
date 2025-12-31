import "./image2.css";
import I1 from "../assets/imageHover/sin.png"
import I2 from "../assets/imageHover/cos.png"
import I3 from "../assets/imageHover/sec.png"
import I4 from "../assets/imageHover/cosec.png"
import I5 from "../assets/imageHover/cot.png"
import { useState } from "react";

let imageArr = [I1,I2,I4,I3,I5];

export default function HoverImages() {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <>
            <div className="GlanceLine">
                <p>Quick Glance</p>
            </div>
            <div className="imageBunch">
                {
                    imageArr.map((img,idx)=><div id={`image${idx}`} className="image">
                        <img src={img} 
                            className={`imageCollage ${activeIndex === idx ? "active" : ""}`}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onMouseLeave={() => setActiveIndex(null)}   
                        />
                    </div>)
                }
            </div>
        </>
    );
}