import React, {useContext, useState} from 'react'
import { ContextAPI } from '../Component/ContextAPI'
import { Link } from 'react-router-dom'
import './Technology.css'
    

const Technology = () => {

    const [loadMore, setLoadMore] = useState(false);
    const [loadBtntext, setLoadBtntext] = useState("Load More");


    const handleLoadMore = () =>{
        setLoadMore(!loadMore);
        console.log(loadMore);
        if(!loadMore){
            setLoadBtntext("Load Less");
        }
        else{
            setLoadBtntext("Load More");
        }
    }

    const [rows] = useContext(ContextAPI);

    return (
        <div>
            <div className='columns'>
                <div className="columns1">
                <div className="technologyTitle">Technology</div>
                {rows.map((item)=>(
                    loadMore == false ?( (item.id)>60 && (item.id)<68?(
                        <div className="technologyNewsCard">
                        <img alt={item.title} 
                            src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                            className="technologyNewsImage"
                        />
                        <div className="newsText">
                            <div>
                                <Link to={`/showblog/${item.id}`}><span className="technologyTextTitle">{item.title}</span></Link>
                                <br />
                                <div className="technologyDescription">{item.description}</div>
                            </div>
                            <div className="lowerNewsText">
                                <span className='category'>{item.category}</span>
                                <span className='date'> {item.date}</span>
                            </div>
                        </div>
                        </div> ):("")) :((item.id)>60 && (item.id)<71?(
                            <div className="technologyNewsCard">
                            <img alt={item.title} 
                                src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                                className="technologyNewsImage"
                            />
                            <div className="newsText">
                                <div>
                                    <Link to={`/showblog/${item.id}`}><span className="technologyTextTitle">{item.title}</span></Link>
                                    <br />
                                    <div className="technologyDescription">{item.description}</div>
                                </div>
                                <div className="lowerNewsText">
                                    <span className='category'>{item.category}</span>
                                    <span className='date'> {item.date}</span>
                                </div>
                            </div>
                        </div> ):(""))
                    ))}
                    <div>
                        <button className="loadMoreTechnology" onClick={()=>setLoadMore(handleLoadMore)}>{loadBtntext}</button>  
                    </div>
                </div>
                <div className="columns2">
                    <div className="topPostsTechnology">
                        <div className="topPostsTechnologyTitle">Top Posts</div>
                        <div className="topTechnologyPostsContent">
                            {rows.map((item)=>(
                                (item.id) == 81 ? (
                                    <div className="topTechnologyPostsContent1">
                                        <img src={item.image} className="topTechnologyPostsImage1"/>
                                        <Link to={`/showblog/${item.id}`}><span className="topTechnologyPostsTextTitle">{item.title}</span></Link>                                      
                                        <div className="lowerNewsText">
                                            <span className='category'>{item.category}</span>
                                            <span className='date'> {item.date}</span>
                                        </div>
                                    </div>
                                    ) :("")         
                            ))}
                            {rows.map((item)=>(
                                (item.id) >82 && (item.id)< 86 ? (
                                    <div className="topTechnologyPostsContent2">
                                        <img src={item.image} className="topTechnologyPostsImage2"/>
                                            <div className="alignColumn">
                                        <Link to={`/showblog/${item.id}`}><span className="topTechnologyPostsTextTitle2">{item.title}</span></Link>                                      
                                                
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

export default Technology
