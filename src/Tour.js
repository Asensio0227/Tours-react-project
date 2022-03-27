import React, {useState} from 'react';
import {AiFillMinusCircle,AiFillPlusCircle} from 'react-icons/ai'

const Tour = ({ id, info, image, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)} className="btn" >
            {readMore ? <AiFillMinusCircle/> : <AiFillPlusCircle/>}
          </button>
        </p>
      </footer>
      <button onClick={() => removeTours(id)} className="delete-btn">
        not interested
      </button>
    </article>
  )
}

export default Tour
