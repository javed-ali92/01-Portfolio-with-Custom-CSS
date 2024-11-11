import Link from "next/link"
import "../style/header.css"

export default function Header(){
    return(
        <div className="header-box">
            <h3>Portfolio</h3>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/project">Project</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                
            </ul>
        </div>
    )
}