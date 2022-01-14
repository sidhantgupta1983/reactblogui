import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css'

const Header = () => {

    const path = useLocation();
    console.log(path);

    return (
        <div>
            <Link to="/home" className="directHome"><div className={`row1Header ${path.pathname.match(/showblog/) ? "styling" : ""}`}>
                <span className="theHeading">The</span>
                <span className="sirenHeading">Siren</span>
            </div></Link>

            <div className={`topnav ${path.pathname.match(/showblog/) ? "hide" : ""}`}>
                <ul className='topList' list-style-type="none">
                    <Link to='/home' href="#" className="topListItem">Home</Link>
                    <Link to='/bollywood' href="#" className="topListItem">Bollywood</Link>
                    <Link to='/technology' href="#" className="topListItem">Technology</Link>
                    <Link to='/hollywood' href="#" className="topListItem">Hollywood</Link>
                    <Link to='/fitness' href="#" className="topListItem">Fitness</Link>
                    <Link to='/food' href="#" className="topListItem">Food</Link>
                </ul>
            </div> 
        </div>
    )
}

export default Header


