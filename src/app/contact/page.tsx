import "../../style/contact.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="contact-box">
      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="contact-links">
          <a
            href="https://github.com/javed-ali92"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <Image
              src="github.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <Image
              src="linkdin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="mailto:javed.ali.1121974@gmail.com"
            className="link-item"
          >
            <Image
              src="gmail.png"
              alt="Gmail"
            />
          </a>
        </div>
      </div>
    </div>
  );
}