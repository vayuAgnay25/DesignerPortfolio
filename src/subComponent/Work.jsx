import "./work.css"
import L1 from "../assets/works/P1.png"
import L2 from "../assets/works/P2.png";
import L3 from "../assets/works/DS1.png";
import L4 from "../assets/works/P3.png";
import L5 from "../assets/works/P4.png";
import V1 from "../assets/works/AIVA.mp4";
import V2 from "../assets/works/iBook.mp4"
import I1 from "../assets/works/memo.png"
import I2 from "../assets/works/DesignGuideline.png"
import I3 from "../assets/works/roamMate.png"
import outerSVG from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const workCategory = [
    {
        type: "UI",
        title: "AI Voice Assistant",
        paragraph: <span>This <mark> multi-modal interface </mark> streamlines file management by combining context-aware voice commands with
            progressive metadata previews and transparent search transitions. Organic 3D motion and <mark> metaphorical animations </mark>
            like the file-to-envelope transformation provide instant visual confirmation, while reactive waveforms ensure
            real-time feedback.By merging voice intent with fluid visual states, the UI eliminates manual navigation and
            significantly reduces cognitive load.</span>,
        logo: L1,
        link: null,
        videoSrc: V1,
        imageSrc: "null",
        rdr: "User Interface",
        theme: { backgroundColor: "white", borderColor: "#e5e5e5" }
    },
    {
        type: "UI",
        title: "iBook - Book Reading App",
        paragraph: <span>This UI blends minimalist design with a tactile,<mark> 3D page-flip </mark> that mimics the physics of a real book to 
            maximize immersion. By utilizing depth-driven shadows and seamless transitions, the interface significantly reduces 
            visual noise and cognitive load while enhancing spatial memory for better information retention. These gesture-responsive 
            motions create psychological <mark>"completion loops"</mark> that provide a sense of progress, transforming a standard reading utility 
            into a premium, high-engagement experience that naturally encourages longer sessions.</span>,
        logo: L5,
        link: null,
        videoSrc: V2,
        imageSrc: "null",
        rdr: "User Interface",
        theme: { backgroundColor: "white", borderColor: "#e5e5e5" }
    },
    {
        type: "UX",
        title: "Memo - Daily Management App",
        paragraph: <span>This project demonstrates how thoughtful UX design can significantly reduce cognitive overload by removing 
            unnecessary decision-making from daily planning. By introducing smart <mark>task prioritization</mark>, the app helps users focus on 
            what truly matters at the right moment. Simple, <mark>intuitive categorization</mark> replaces cluttered lists with clear structure 
            and visual hierarchy. <mark>Automated reminders</mark> and timely nudges ensure important tasks are never forgotten. Together, these 
            solutions help users feel calmer, more in control, and confident in managing their daily routines.</span>,
        logo: L2,
        link: null,
        videoSrc: "null",
        imageSrc: I1,
        rdr: " case study",
        theme: { backgroundColor: "#111112", borderColor: "#252525" }
    },
    {
        type: "UX",
        title: "Roammate - Travel assistant App",
        paragraph: <span>Roamate is a smart,<mark> AI-powered </mark> travel companion that helps tourists discover nearby places, cafés, 
            adventures, and stays—all in one app. It combines interactive maps with <mark>real-time</mark> crowd, safety, and distance insights 
            to make exploration effortless. Roamate also guides users with walking, public transport, and <mark>local guidance</mark>, 
            ensuring safe, personalized, and stress-free travel experiences.</span>,
        logo: L4,
        link: "roamMate",
        videoSrc: "null",
        imageSrc: I3,
        rdr: " case study",
        theme: { backgroundColor: "white", borderColor: "#white" }
    },
    {
        type: "UX",
        title: "Design Guidelines",
        paragraph: <span>A design system is the <mark>backbone of a product</mark>, keeping every screen consistent and familiar.
            It helps teams build faster by reusing components instead of starting from scratch.
            Most importantly, it aligns design and development so the product grows smoothly without breaking the experience.</span>,
        logo: L3,
        link: "DesignSystem",
        videoSrc: null,
        imageSrc: I2,
        rdr: "design system",
        theme: { backgroundColor: "#f5f5f5", borderColor: "#f5f5f5" }
    }
]


export default function Work() {
    return (
        <>
            <div className="workLine">
                <p>Selected work</p>
            </div>

            <div className="workDisplay">
                {
                    workCategory.map((work) => {
                        return (
                            <div className="work">
                                <div className="displayLine">
                                    <div id="workTitle"><img src={work.logo} /> <p>{work.title}</p></div>
                                    <p className={work.rdr}>{work.rdr}</p>
                                </div>
                                <div className="display" style={{ backgroundColor: work.theme.backgroundColor }}>
                                    {work.type == "UI" ? <video style={{ borderColor: work.theme.borderColor }} autoPlay loop muted playsInline type="video/mp4" src={work.videoSrc} /> : <img src={work.imageSrc} />}
                                </div>
                                <p id="workDetails">{work.paragraph}</p>
                                {(work.type === "UI") ? (
                                    <></>
                                ) : (
                                    (!work.link || work.link.trim() === "") ? (<span className="status-label">Coming soon</span>) :
                                        (<a href={`/${work.link}`} target="_blank" rel="noopener noreferrer">
                                            View {work.rdr} <img src={outerSVG} alt="" />
                                        </a>)
                                )}
                                <div className="space"></div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
}
