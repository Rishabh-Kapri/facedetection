import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkFrom from './components/ImageLinkForm/ImageLinkForm';
import Signin from './components/Signin/Signin';
import Register from './components/Signin/Register';
import particleOptions from './particleOptions';
import './App.css';
import Clarifai from 'clarifai';

// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: 'd92746b64a0147fca04087468ba20183'});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const responseFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(responseFace);

    return {
      leftCol: responseFace.left_col * width,
      topRow: responseFace.top_row * height,
      rightCol: width - (responseFace.right_col * width),
      bottomRow: height - (responseFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // Predict the contents of an image by passing in a URL.
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => {
        // console.log(err);
      });
  }

  onRouteChange = (route) => {
    if (route === 'signout')
      this.setState({isSignedIn: false});
    else if (route === 'home')
      this.setState({isSignedIn: true})

    this.setState({route: route});
  }

  render() {
    const {input, imageUrl, box, route, isSignedIn} = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { (route === 'home') 
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkFrom
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
          :(
             route === 'signin'
             ? <Signin onRouteChange={this.onRouteChange} />
             : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;