import React, {useContext} from 'react'
import { ContextAPI } from './ContextAPI'


const ShowBlog = (props) => {
    console.log(props);

    const [rows] = useContext(ContextAPI)
    return (
        <div>
            <div>
                <p>Hello Blogger
                {rows.map((item)=>(
                    item.id == props ? (<div>
                        {item.title}
                        {item.description}
                        
                    </div>):("")
                    ))}
                </p>
            </div>
              
        </div>
    )
}

export default ShowBlog
