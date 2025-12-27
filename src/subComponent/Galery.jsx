import "./GaleryGrid.css";

const imageList = []

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