import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='row1Header'>
                <span className="theHeading">The</span>
                <span className="sirenHeading">Siren</span>
            </div>
            <div className="topnav">
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


