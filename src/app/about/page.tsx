import Image from "next/image";
import "../../style/about.css";

export default function About() {
  return (
    <div className="poster-container">
      <div className="poster-content">
        <h1>About</h1>
        <p className="text-lg leading-relaxed text-white">
        Bachelor in Islamic Studies (Jamia tul Madina, 2004): A comprehensive degree program that provides in-depth knowledge of Islamic theology, history, and cultural practices, completed at Jamia tul Madina in 2004. It prepares graduates to engage with and contribute to discussions on Islamic principles and their application in contemporary society.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-white">
        Currently, I&apos;m expanding my knowledge in the fields of Artificial Intelligence, Web 3.0, and the Metaverse through ongoing studies at the Governor House in Karachi. My passion for technology and data drives me to continuously seek new learning opportunities, equipping me with the skills necessary to tackle complex challenges in the evolving digital landscape.
        </p>
        <Image 
          src="/path/to/your/image.jpg"
          alt="Description of the image"
          width={500} 
          height={300}
        />
      </div>
    </div>
  );
}
