import './cameraStyle.css'
import { useState, useRef } from 'react'
import html2canvas from 'html2canvas';

console.log(window.innerWidth)

export default function Camera() {
    const [powerState, setPowerState] = useState(false);
    const [cameraStreams, setCameraStream] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const videoRef = useRef(null); // Video element ko access karne ke liye

    async function togglePower() {
        if (!powerState) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setCameraStream(stream);

                // Video element mein stream set karna
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
                setPowerState(true);
            } catch (err) {
                console.error("Camera access error: ", err);
                alert("Camera access denied!");
            }
        } else {
            shutdown();
        }
    }

    function shutdown() {
        // Camera tracks ko stop karna zaroori hai warna camera light ON rahegi
        if (cameraStreams) {
            cameraStreams.getTracks().forEach(track => track.stop());
        }
        setCameraStream(null);
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setPowerState(false);
    }

    const imageRef = useRef();

    const captureImage = () => {

        if (powerState && videoRef.current && videoRef.current.readyState === 4) {
            const video = videoRef.current;
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageFile = canvas.toDataURL("image/png");
            setCapturedImage(imageFile);
            
            document.getElementById('paper').classList.add('printEffect')
            shutdown();
        }
    };

    const retake = () => {
        document.getElementById('paper').classList.remove('printEffect')
        document.getElementById('paper').classList.add('deleteEffect')
            
        setCapturedImage(null);
        togglePower();

    };

    const download = async () => {
        const originalElement = document.getElementById("paper");
        if (!originalElement) return;

        const clone = originalElement.cloneNode(true);

        Object.assign(clone.style, {
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            transform: "none",
            display: "block",
        });

        document.body.appendChild(clone);

        try {
            // Note: Make sure html2canvas is imported or available globally
            const canvas = await html2canvas(clone, {
                useCORS: true,
                scale: 3,
                backgroundColor: null,
            });

            const link = document.createElement("a");
            link.download = `Polaroid_${Date.now()}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch (error) {
            console.error("Snapshot failed:", error);
        } finally {
            document.body.removeChild(clone);
        }
    };

    return (
        <div className="cameraPlacement" ref={imageRef}>
            <h6>Snap a polaroid-style moment</h6>
            <div className="cameraBody" id="camera">
                <div className="sensorCategory">
                    <button onClick={togglePower} id="power" aria-label="Power Button">
                        <span className="led"></span>
                    </button>
                    <div className="sensor"></div>
                    <button onClick={captureImage} id="capture">tap to capture</button>
                </div>

                <div id="lens">
                    <video ref={videoRef} id="videoElement" autoplay playsinline></video>
                </div>

                <div className="band"></div>
                <div className="printer">
                    <hr />
                </div>
            </div>

            <div id="paper" className="paper" style={{ display: capturedImage ? "block" : "none" }} id="paper">
                <img id="imageDisplay" src={capturedImage} alt="Captured moment" />
                <p id="timeStamp"></p>
            </div>

            <div style={{ display: capturedImage ? "grid" : "none" }} className="buttons">
                <button onClick={retake} id="retake">Retake</button>
                <button onClick={download} id="download">Download</button>
            </div>
        </div>
    )
}