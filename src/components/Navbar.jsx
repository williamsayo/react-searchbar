import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className='navbar laptop'>
                <Link to='home' >the TRAVELHUNTERS </Link>
                <ul className='nav-links'>
                    <li><Link to='home' >Hotels</Link></li>
                    <li><Link to='home' >Late-Night deals</Link></li>
                    <li><Link to='home' >List my property</Link></li>
                    <li><Link to='home' >Refer & Earn</Link></li>
                    <li><Link to='home' >Signin</Link></li>
                    <li><Link to='home' >Get started</Link></li>
                </ul>
            </nav>
            <nav className='navbar mobile'>
                <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </nav>
        </>
    )
}

export default Navbar
