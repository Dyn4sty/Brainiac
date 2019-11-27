import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <a href={imageUrl}><img id='inputimage' alt='' src={imageUrl || 'https://via.placeholder.com/500x300?text=Brainiac+Face+Detect'} width='500' height='auto'/></a>
        <div className='bounding-box'  style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;