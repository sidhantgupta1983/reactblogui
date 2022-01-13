import React, {useState,useContext} from 'react'
// import mainValleypik from './mainvalleypik.jpg'
// import sideValleypik from './sidevalleypik.jpg'
import { ContextAPI } from '../Component/ContextAPI'
import './Home.css'

const Home = () => {
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

    const handleViewMore = () =>{
        viewmorecount++;
        console.log(viewmorecount);
        setViewMore(!viewMore);
        if(viewmorecount%2 == 1){
            viewmorebtn = "View Less";
            }
            else {
                viewmorebtn = "view More";
            }
        console.log(viewMore,viewmorebtn);
    }

    const [rows] = useContext(ContextAPI);
    
    return (
        <div className='container'>
            <div className='row1'>
                <div className='col col1'>
                    {rows.map((item)=>(
                        (item.id) == 1000 ? (
                            <>
                                <h3 className="mainValleyTitle">Valley of Kashmir</h3>
                                <h6 className="mainValleySubtitle">Travel / August 21, 2021</h6>
                                <img src={item.image} alt='Main Valley Pik' className='mainValleyPik'/>
                            </>) : ("")

                    ))}
                    
                </div>
                <div className='col col2'>
                    {rows.map((item)=>(
                        (item.id == 1001) ? (
                            <>
                                <h3 className="sideValleyTitle1">The Sound cloud </h3>
                                <h6 className="sideValleySubtitle1">Travel / August 21, 2021</h6>
                                <img src={item.image} alt='Main Valley Pik' className='sideValleyPik'/>
                                <h3 className="sideValleyTitle2">You loved is doomed</h3>
                                <h6 className="sideValleySubtitle2">Travel / August 21, 2021</h6>
                                <img src={item.image} alt='Main Valley Pik' className='sideValleyPik'/>
                            </>
                        ) : ("")
                    ))}
                    
                </div>
            </div>
            <div className="latestPost">
                <div className="latestPostTitle">The Latest</div>
                <div className="latestPostContent">
                    <div className="postContent">
                       {rows.map((item)=>(
                           (item.id)<4 ? (
                            <div className="newsCard">
                            <img alt={item.title} 
                                src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                                className="newsImage"
                            />
                            <div className="newsText">
                                <div>
                                    <span className="title">{item.title}</span>
                                    <br />
                                    <div className="description">{item.description}</div>
                                </div>
                                <div className="lowerNewsText">
                                    <span className='category'>{item.category}</span>
                                    <span className='date'> {item.date}</span>
                                </div>
                            </div>
                        </div> ) :("")                          
                         ))}
                    </div>
                </div>
            </div>
            <div className="latestArticle">
                <div className="latestArticleTitle">Latest Articles</div>
                <div className="latestArticleContent">
                    <div className="column">
                        <div className="column1">
                            {rows.map((item)=>(
                                loadMore == false ?( (item.id)>3 && (item.id)<8?(
                                    <div className="latestArticleNewsCard">
                                    <img alt={item.title} 
                                        src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                                        className="latestArticelNewsImage"
                                    />
                                    <div className="newsText">
                                        <div>
                                            <span className="latestArticleTextTitle">{item.title}</span>
                                            <br />
                                            <div className="latestArticleDescription">{item.description}</div>
                                        </div>
                                        <div className="lowerNewsText">
                                            <span className='category'>{item.category}</span>
                                            <span className='date'> {item.date}</span>
                                        </div>
                                    </div>
                                    </div> ):("")) :((item.id)>3 && (item.id)<10?(
                                        <div className="latestArticleNewsCard">
                                        <img alt={item.title} 
                                            src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                                            className="latestArticelNewsImage"
                                        />
                                        <div className="newsText">
                                            <div>
                                                <span className="latestArticleTextTitle">{item.title}</span>
                                                <br />
                                                <div className="latestArticleDescription">{item.description}</div>
                                            </div>
                                            <div className="lowerNewsText">
                                                <span className='category'>{item.category}</span>
                                                <span className='date'> {item.date}</span>
                                            </div>
                                        </div>
                                    </div> ):(""))
                                ))}
                                <div>
                                <button className="loadMore" onClick={()=>setLoadMore(handleLoadMore)}>{loadmorebtn}</button>
                                {rows.map((item)=>(
                                    (item.id) == 5 ? (
                                        <>
                                        <span className="imageText">Joshua Tree</span>
                                        <span className="imageLowerText">Travel / 27 August, 2017</span>
                                        <img src={item.image} className='verticalImage'></img></>
                                    ):(" ")
                                ))}
                            </div>
                        </div>
                        <div className="column2">
                            <div className="advertisement">
                                <span className='advText'>Advertisement</span>
                            </div>
                            <div className="topPosts">
                                <div className="topPostsTitle">Top Posts</div>
                                    <div className="topPostsContent">
                                    {rows.map((item)=>(
                                        (item.id) == 8 ? (
                                            <div className="topPostsContent1">
                                                <img src={item.image} className="topPostsImage1"/>
                                                <span className="topPostsTextTitle">{item.title}</span>
                                                <div className="lowerNewsText">
                                                    <span className='category'>{item.category}</span>
                                                    <span className='date'> {item.date}</span>
                                                </div>
                                            </div>
                                        ) :("")         
                                    ))}
                                    {rows.map((item)=>(
                                        (item.id) >7 && (item.id)< 11 ? (
                                            <div className="topPostsContent2">
                                                <img src={item.image} className="topPostsImage2"/>
                                                <div className="alignColumn">
                                                    <span className="topPostsTextTitle2">{item.title}</span>
                                                    <div className="lowerNewsText2">
                                                        <span className='category'>{item.category}</span>
                                                        <span className='date'> {item.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :("")
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="latestStories">
                <div className="latestStoriesTitle">Latest Stories</div>
                <div className="latestStoriesContent">
                {rows.map((item)=>(
                    viewMore == false ? ((item.id)>7 && (item.id) < 11? (
                        <div className="newsCard">
                            <div className="newsText">
                                <div>
                                    <span className="latestStoriesTextTitle">{item.title}</span>
                                    <br />
                                    <div className="description">{item.description}</div>
                                </div>
                                <div className="lowerNewsText">
                                    <span className='category'>{item.category}</span>
                                    <span className='date'> {item.date}</span>
                                </div>
                            </div>
                        </div> ) :("")) :((item.id)>7 && (item.id) < 14? (
                        <div className="newsCard">
                            <div className="newsText">
                                <div>
                                    <span className="latestStoriesTextTitle">{item.title}</span>
                                    <br />
                                    <div className="description">{item.description}</div>
                                </div>
                                <div className="lowerNewsText">
                                    <span className='category'>{item.category}</span>
                                    <span className='date'> {item.date}</span>
                                </div>
                            </div>
                        </div> ) :(""))                        
                ))}
                </div>
                <button className="viewMore" onClick={()=>{handleViewMore()}}>{viewmorebtn}</button>
            </div>
        </div>
    )
}

export default Home
