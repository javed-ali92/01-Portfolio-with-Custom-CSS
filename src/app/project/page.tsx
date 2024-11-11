import "../../style/project.css"
import Image from "next/image"

export default function Project(){
    return (
        <div className="project-box">
            <h1 className="project-heading">My Projects</h1>
        <div className="main-div">    
      <div className="project-item">
        <Image
          src="/cv.PNG"
          alt="Portfolio Item Image"
          width={300}
          height={250}
          className="portfolio-image"
        />

        <h3>Static Resume</h3>
        <p>
        An interactive resume built with TypeScript, HTML, and CSS, enabling users to dynamically showcase their skills.
        </p>
        <button type="button"><a href="https://static-interactive-resume-builder-gamma.vercel.app//"  target="_blank">View Resume</a></button>
      </div>
        </div>     

    </div>
    )
}