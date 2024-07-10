export default function Footer() {
    
    const handleSubmit = (e)=> {
        e.target.preventDefault()
    }

    return (
        <>
        <footer id="footer" className="footer u-flex-collumn">

            <form className="footer__input flex" onSubmit={(e)=> handleSubmit(e)}>
                <input type="email" placeholder="updates in your inbox..." className="footer__input--value"/>
                <button className="u-orange-btn footer__input--btn" type="Submit">Go</button>
            </form>

            <div className="footer__links u-pale-font">
                    <a href="/" className="footer__links--home">Home</a>
                    <a href="/" className="footer__links--carrers">Carrers</a>
                    <a href="/" className="footer__links--pricing">Pricing</a>
                    <a href="/" className="footer__links--community">Community</a>   
                    <a href="/" className="footer__links--About">Product</a>
                    <a href="/" className="footer__links--privacy">Privacy Policy</a>          
                    <a href="/" className="footer__links--product">About us</a>
            </div>

            <div className="footer__socials flex">
                <a href="" className="facebook">
                </a>
                <a href="" className="youtube">
                </a>
                <a href="" className="twitter">
                </a>
                <a href="" className="pinterest">
                </a>
                <a href="" className="instagram">
                </a>
            </div>

            <div className="footer__logo">
                <img src="/landing-page-with-react/assets/logo.svg" alt="logo" className="logo"/>
            </div>

            <div className="footer__copyright">
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
        </>
    )
}