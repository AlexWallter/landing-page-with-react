import { useState } from "react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <header className="header-container">
            <div className="img-container flex">
                <div className="logo"><img src="./src/assets/logo.svg" alt="logo"/></div>
                <div className={`nav-open ${isOpen ? 'active':''}`} onClick={()=>{setIsOpen(!isOpen)}}></div>
            </div>
            <nav className='main-navegation flex'>
                <ul className= {`flex links-container u-semi-bold-font ${isOpen ? 'active':''}`}>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Carrers</a></li>
                    <li><a href="/">Community</a></li>
                </ul>
            </nav>
                <a href="/" className="u-orange-btn nav-btn in-layout">Get Started</a>
        </header>
        </>
    )
}