import React, {useContext, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { ContextAPI } from './ContextAPI'
import hand from '../hand.jpg'
import share from '../share.jpg'
import face from '../face.png'
import "./ShowBlog.css"


const ShowBlog = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [rows] = useContext(ContextAPI)
    const {id} = useParams();
    let val1 = id-1;
    let val1string = String(val1);
    console.log(val1string);
    return (
        <div>
            <div className="mainColumn">
                <div className='mainColumn1'>
                    <div className="handDiv">
                        <img src={hand} alt="" className="hand"/>
                        <span className="handCount">5.5k</span>
                    </div>
                    <div className="shareDiv">
                        <img src={share} alt="" className="share"/>
                        <span className="shareCount">Share this Article</span>
                    </div>                
                </div>
                <div className='mainColumn2' >
                    {rows.map((item)=>(
                        item.id === id ? (<div>
                            <div className="itemTitle">{item.title}</div>
                            <div className="pikIcons">
                                <img src={face} alt="" className="face"/>
                                <div className="nameDate">                                
                                    <span className="name">SIDHANT GUPTA KAASHHYUP</span>
                                    <span className="date">{item.date} 10 mins read</span>
                                </div>
                                <div className="icons">
                                    <i class="fa-brands fa-facebook-square"></i>
                                    <i class="fa-brands fa-twitter-square"></i>
                                    <i class="fa-brands fa-instagram-square"></i>
                                    <i class="fa-brands fa-youtube-square"></i>
                                </div>
                            </div>
                            <img src={item.image} alt="" className="arrangeImage" />
                            <div className="itemDescription">{item.description}</div>
                        </div>):("")
                        ))}
                </div>
            </div>
            <div className="moreArticlesFromSiren">
                <div className="moreArticlesFromSirenTitle">
                    <span>More from the Siren </span>
                </div>
                <div className="arrangeRow">
                    {rows.map((item)=>(
                        (item.id > 151) && (item.id < 155)  ? (
                                <div className="extraReads">
                                    <img src={item.image} alt="" className="extraReadImage"/>
                                    <Link to={`/showblog/${item.id}`}><span className="extraReadTitle">{item.title}</span></Link>
                                    <div className="extraReadLowerNewsText">
                                            <span className='date'> {item.date} <b className="space">10 mins read</b></span>
                                    </div>
                                </div>
                        ):("")
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowBlog
