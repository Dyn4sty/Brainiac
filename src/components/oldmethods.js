// html
{/* <input type="file" onChange={handleChange}/>
<button className='w-30 grow f4 link ph3 pv2 dib white' style={{backgroundColor: '#f7797d'}} onClick={handleUpload}>Upload</button><br/>
 */}

 // js
 
handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
    
      const {image} = this.state;
      if (image == null) {
        Swal.fire('Error!','No Image Selected','error')
        return
      }
      document.getElementById("detect").disabled = true
      this.setState({progress_show: true})
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {

        console.log(error);
      }, 
      () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(imageUrl => {
          document.getElementById("detect").disabled = false
            this.setState({imageUrl})
            this.SendRequest(this.state.imageUrl,)
        })
        this.setState({image: null})
    });
  }