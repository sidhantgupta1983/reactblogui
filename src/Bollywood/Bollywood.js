import React, {useContext, useState} from 'react'
import { ContextAPI } from '../Component/ContextAPI'
import ShowBlog from '../Component/ShowBlog'
import { Link } from 'react-router-dom'
import './Bollywood.css'
    

const Bollywood = () => {

    const[id,setId] = useState({
        id:"",
    });

    const handleId = (val) =>{
        console.log(val);
        setId({
            [id]:val
        });
        console.log(id);
        <ShowBlog pass={[id]} />
    }

    let loadmorebtn = "Load More";
    let loadmorecount;
    let viewmorecount;
    console.log(loadmorecount,viewmorecount);
    let viewmorebtn = "View More";
    const [loadMore, setLoadMore] = useState(false);
    const [viewMore, setViewMore] = useState(false);


    const handleLoadMore = () =>{
        loadmorecount++;
        console.log(loadmorecount);
        setLoadMore(!loadMore);
        if(loadmorecount%2 == 1){
        loadmorebtn = "Load Less";
        }
        else {
            loadmorebtn = "Load More";
        }
        console.log(loadMore,loadmorebtn);
    }

    const [rows] = useContext(ContextAPI);
    


    return (
        <div>
            <div className='columns'>
                <div className="columns1">
                <div className="bollywoodTitle">Bollywood</div>
                {rows.map((item)=>(
                    loadMore == false ?( (item.id)>30 && (item.id)<38?(
                        <div className="bollywoodNewsCard">
                        <img alt={item.title} 
                            src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                            className="bollywoodNewsImage"
                        />
                        <div className="newsText">
                            <div>
                            <Link to='/showblog'><button className="hideBtn" onClick={()=>handleId(item.id)}><span className="bollywoodTextTitle">{item.title}</span></button></Link>

                                <br />
                                <div className="bollywoodDescription">{item.description}</div>
                            </div>
                            <div className="lowerNewsText">
                                <span className='category'>{item.category}</span>
                                <span className='date'> {item.date}</span>
                            </div>
                        </div>
                        </div> ):("")) :((item.id)>30 && (item.id)<41?(
                            <div className="bollywoodNewsCard">
                            <img alt={item.title} 
                                src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                                className="bollywoodNewsImage"
                            />
                            <div className="newsText">
                                <div>
                                <Link to='/showblog'><button className="hideBtn" onClick={()=>handleId(item.id)}><span className="bollywoodTextTitle">{item.title}</span></button></Link>
                                    
                                    <br />
                                    <div className="bollywoodDescription">{item.description}</div>
                                </div>
                                <div className="lowerNewsText">
                                    <span className='category'>{item.category}</span>
                                    <span className='date'> {item.date}</span>
                                </div>
                            </div>
                        </div> ):(""))
                    ))}
                    <div>
                        <button className="loadMoreBollywood" onClick={()=>setLoadMore(handleLoadMore)}>{loadmorebtn}</button>  
                    </div>
                </div>
                <div className="columns2">
                    <div className="topPostsBollywood">
                        <div className="topPostsBollywoodTitle">Top Posts</div>
                        <div className="topBollywoodPostsContent">
                            {rows.map((item)=>(
                                (item.id) == 51 ? (
                                    <div className="topBollywoodPostsContent1">
                                        <img src={item.image} className="topBollywoodPostsImage1"/>
                                        <Link to='/showblog'><button className="hideBtn" onClick={()=>handleId(item.id)}><span className="topBollywoodPostsTextTitle">{item.title}</span></button></Link>
                                        <div className="lowerNewsText">
                                            <span className='category'>{item.category}</span>
                                            <span className='date'> {item.date}</span>
                                        </div>
                                    </div>
                                    ) :("")         
                            ))}
                            {rows.map((item)=>(
                                (item.id) >52 && (item.id)< 56 ? (
                                    <div className="topBollywoodPostsContent2">
                                        <img src={item.image} className="topBollywoodPostsImage2"/>
                                            <div className="alignColumn">
                                                <Link to='/showblog'><button className="hideBtn" onClick={()=>handleId(item.id)}><span className="topBollywoodPostsTextTitle2">{item.title}</span></button></Link>                                          
                                                <div className="lowerNewsText2">
                                                    <span className='category'>{item.category}</span>
                                                    <span className='date'> {item.date}</span>
                                                </div>
                                            </div>
                                    </div>) :("")
                            ))}
                        </div>
                    </div>
                    <div className="advertisement">
                        <span className='advText'>Advertisement</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bollywood
