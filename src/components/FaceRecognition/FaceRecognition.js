import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <a href={imageUrl || ''}><img id='inputimage' alt='' src={imageUrl || 'https://via.placeholder.com/500x300?text=Brainiac+Face+Detect'} width='500' height='auto'/></a>
        {box.length
          ? box.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bounding-box"
                  style={{
                    top: item.topRow,
                    left: item.leftCol,
                    bottom: item.bottomRow,
                    right: item.rightCol
                  }}
                />
              )
            })
          : ''}
      </div>
    </div>
  );
}

export default FaceRecognition;