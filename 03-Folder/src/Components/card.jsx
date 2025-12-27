import React from 'react'
import { ThumbsUp  } from 'lucide-react'
import { BadgePlus} from 'lucide-react'

const card = (props) => {
  return (
    <div>
      <div className="mainbox" style={{backgroundImage: `url(${props.backgroundImage})`}}>
         <img src={props.profilePhoto} alt="photo" className='profilephoto'/>
         <div className="secondbox">
            <h1 className='name'>{props.name}</h1>
            <div className="tags">
              <h4>{props.nickname}</h4>
            </div>
            <p className='description'>{props.description}</p>
            <div className="bottombox">
              <button className="followbutton">Follow</button>
              <button className='likebutton'><ThumbsUp size={25} /></button>
              <button className='likebutton'><BadgePlus size={25} /></button>

            </div>
          

         </div>
      </div>
    </div>
  )
}

export default card
