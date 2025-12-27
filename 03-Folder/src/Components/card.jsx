import React from 'react'
import { ThumbsUp  } from 'lucide-react'
import { BadgePlus} from 'lucide-react'

const card = () => {
  return (
    <div>
      <div className="mainbox">
         <img src="https://imgs.search.brave.com/6LDhRZMN2_cwg8rO0Mja9BcQLuLh0OtebJTZWrKxFXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxNTk4/OTIuanBn" alt="photo" className='profilephoto'/>
         <div className="secondbox">
            <h1 className='name'>John Wick</h1>
            <div className="tags">
              <h4>Boogeyman</h4>
            </div>
            <p className='description'>A man of focus, commitment, and sheer fucking will.</p>
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
