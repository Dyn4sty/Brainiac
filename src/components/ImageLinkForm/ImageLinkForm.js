import React from 'react';
import './ImageLinkForm.css'
import Dropzone from 'react-dropzone'

const ImageLinkForm = ({ onInputChange, onButtonSubmit, handleOnDrop ,progress, progress_show, acceptedFileTypes, imageMaxSize}) => {
if (progress_show) {
    return(
      <div>
      <p className='f3 center'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='center ma2 pa4 br3 shadow-5' style={{width: '800px'}}>
        
        <textarea style={{resize: 'none'}} className='center pa1 w-70 ' placeholder='https://www.example.com/images/dinosaur.jpg' type='text' onChange = {onInputChange}></textarea>
        <button id = 'detect'
          className='w-30 grow f4 link ph3 pv2 dib white'
          style={{backgroundColor: '#f7797d'}}
          onClick={onButtonSubmit}>Detect</button>
        </div>

      </div>

      <div>
      <Dropzone accept={acceptedFileTypes} multiple={false} maxSize={imageMaxSize} onDrop={handleOnDrop}>
    {({getRootProps, getInputProps}) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} /><br></br>
          <label id='drag' className='center ma2 shadow-5' >Drag 'n' drop some files here, or click to select files</label>
        </div>
      </section>
    )}
  </Dropzone>
      <progress className='progress' value={progress} max="100"/><br/>  
      </div>
    </div>
    )
  }
  return (
    <div>
      <p className='f3 center'>
      {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
    <div className='center'>
      <div className='center ma2 pa4 br3 shadow-5' style={{width: '800px'}}>
      
        <textarea style={{resize: 'none'}} className='center pa1 w-70 ' placeholder='https://www.example.com/images/dinosaur.jpg' type='text' onChange = {onInputChange}></textarea>
        <button id = 'detect'
          className='w-30 grow f4 link ph3 pv2 dib white'
          style={{backgroundColor: '#f7797d'}}
          onClick={onButtonSubmit}>Detect</button>

      </div>
      
    </div>
    <Dropzone accept={acceptedFileTypes} multiple={false} maxSize={imageMaxSize} onDrop={handleOnDrop}>
    {({getRootProps, getInputProps}) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} /><br></br>
          <label id='drag' className='center ma2 shadow-5' >Drag 'n' drop some files here, or click to select files</label>
        </div>
      </section>
    )}
  </Dropzone>
  </div>
  
  )
}

export default ImageLinkForm;