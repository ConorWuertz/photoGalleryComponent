import React from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery'

class App extends React.Component {
  images;
  constructor(props) {
    super(props);
    // manually create some mock data for purpose of this exercise
    // consists of a list of image urls and captions
    this.images = [
      {
        url: "https://www.vanguardia.com/binrepository/716x477/0c0/0d0/none/12204/HXHF/web_colp_067627_f_big_ce_VL309205_MG19806587.jpg", 
        caption: "The awe inspiring Nevado del Ruiz volcano of the Colombian Andes."
      },
      {
        url: "https://www.eluniversal.com.mx/sites/default/files/2018/09/17/canon_sumidero_chiapas_r.jpg",
        caption: "Cañon del Sumidero, the Grand Canyon of Mexico, located in the southern state of Chiapas."
      }
    ];
  }
  render () {
    return (
      <div className="App">
        <PhotoGallery images={this.images} />
      </div>
    );
  }
}

export default App;
