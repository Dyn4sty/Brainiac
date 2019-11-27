import React from "react";
import Particles from "react-particles-js";
import Swal from "sweetalert2";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import particlesOptions from "./particlesOptions";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import "./App.css";
import { storage } from "./firebase";
import { verifyFile, acceptedFileTypes, imageMaxSize } from "./verifyFile";

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  progress: 0,
  progess_show: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        const image = files[0];
        this.setState({ progress_show: true });
        document.getElementById("detect").disabled = true;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            // progrss function ....
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
          },
          error => {
            console.log(error);
          },
          () => {
            // complete function ....
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(imageUrl => {
                document.getElementById("detect").disabled = false; // disabling the Detect btn
                this.setState({ input: imageUrl });
                this.SendRequest(this.state.input, "Bad Image");
              });
            this.setState({ image: null });
            this.setState({ input: "" });
          }
        );
      }
    }
  };
  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  isUrlValid = userInput => {
    var res = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) return false;
    else return true;
  };

  onButtonSubmit = () => {
    this.setState({ progress_show: false });
    const input_field = this.state.input;
    if (input_field === "") {
      Swal.fire("Error!", "Blank Input", "error");
      return;
    } else {
      if (!this.isUrlValid(input_field)) {
        Swal.fire("Error!", "Bad Image URL", "error");
        return;
      }
    }

    this.SendRequest(this.state.input, "Could not process image");
  };

  SendRequest = (file, custom_error) => {
    fetch("https://brainiac-face-recognition.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: file
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.outputs[0].data.regions[0]) {
          this.setState({ imageUrl: this.state.input });
          fetch("https://brainiac-face-recognition.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
          this.displayFaceBox(this.calculateFaceLocation(response));
        }
      })
      .catch(err => Swal.fire("Error!", custom_error, "error"));
  };
  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  refreshEntries = () => {
    fetch("https://brainiac-face-recognition.herokuapp.com/entries", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, { entries: count }));
      });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.user.id !== "") {
        this.refreshEntries();
      }
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      isSignedIn,
      imageUrl,
      route,
      box,
      progress,
      progress_show
    } = this.state;

    return (
      <React.Fragment>
        <Particles className="particles" params={particlesOptions} />

        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <React.Fragment>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              progress={progress}
              progress_show={progress_show}
              handleOnDrop={this.handleOnDrop}
              imageMaxSize={imageMaxSize}
              acceptedFileTypes={acceptedFileTypes}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </React.Fragment>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
