import { useEffect, useContext } from 'react';
import { Context } from '../context/Context';
import IconHeart from './IconHeart';

const Gallery = ({ criteria }) => {

  const { data, generateData } = useContext(Context)


  const likePhoto = (e) => {
    const tempArray = [...data]
    const index = data.findIndex(objeto => objeto.id === e.id)
    if (tempArray[index].liked) {
      tempArray[index].liked = false
    }
    else {
      tempArray[index].liked = true
    }
    generateData(tempArray)
  }

  const renderPhotos = () => {
    
 
    if (criteria) {
      return (
        data.filter(element => element.liked==criteria).map((element) => {
          return (
            <div key={element.id} className="col">
              <div className="photo-container border h-100">
                <img src={element.src.tiny} />
              </div>
            </div>
          );
        })
      );
      
    }
  
    else {
      return (
        data.map((element) => {
          return (
            <div key={element.id} className="col">
              <div className="photo-container border h-100">
                <div className='like-icon p-1' onClick={(() => likePhoto(element))}>
                  <IconHeart filled={element.liked} />
                </div>
                <img src={element.src.tiny} />
                <div className='alt-text'><p className='p-2 m-0'>{element.alt}</p></div>
              </div>
            </div>
          )
        })
      );
    }
  }

  return (
    <div className='container'>
      <div className="row row-cols-5 g-3">
        {renderPhotos()}
      </div>
    </div >
  )
};

export default Gallery;