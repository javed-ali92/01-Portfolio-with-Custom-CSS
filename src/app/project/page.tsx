import "../../style/project.css";
import Image from "next/image";

export default function Project() {
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
            An interactive resume built with TypeScript, HTML, and CSS, enabling
            users to dynamically showcase their skills.
          </p>
          <button type="button">
            <a
              href="https://static-resume-theta-ashy.vercel.app/"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/simple-calculator.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Simple Calculator</h3>
          <p>
          Basic calculator that performs addition, subtraction, multiplication, and division. Users can input numbers and operations, and the result will be displayed dynamically
          </p>
          <button type="button">
            <a
              href="https://governor-sindh-website-eight.vercel.app/"
              target="_blank"
            >
              View Calculator
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/digital-clock.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Digital Clock</h3>
          <p>
          Design a digital clock that displays the current time in hours, minutes, and seconds. Include features like a customizable background and the ability to switch between 12-hour and 24-hour formats.
          </p>
          <button type="button">
            <a
              href="https://next-js-digital-clock-kappa.vercel.app/"
              target="_blank"
            >
              View Clock
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/governor-web.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Governor Website</h3>
          <p>
          Develop a website for the Governor House that showcases its history, architecture, and current events. Include sections for public announcements, visitor information, and a gallery of images
          </p>
          <button type="button">
            <a
              href="https://governor-sindh-website-eight.vercel.app/"
              target="_blank"
            >
              View Website
            </a>
          </button>
        </div>
      </div>
      </div>
  )
}
