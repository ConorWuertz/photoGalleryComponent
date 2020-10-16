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
      },
      {
        url: "https://seecolombia.travel/blog/wp-content/uploads/2016/03/DSCF8091.jpg",
        caption: "La Guajira desert, the furthest northern point of South America."
      },
      {
        url: "http://www.orneveien.org/nikon-d800/panoramas/huge/2015-02-06-wellville-mountains-gleaming-new-snow-panorama-halfsize.jpg",
        caption: "This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. "
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tall_architecture.jpg",
        caption: "This is a very tall image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. This is a very wide image with an extremely long caption. "
      },
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
