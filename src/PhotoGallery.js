import React from 'react';
import './App.css';


class PhotoGallery extends React.Component {

    renderEmpty() {
        return (
            <div className={"emptyGalleryContent"}>
                There are no photos in this gallery. Try adding passing some to the PhotoGallery component!
            </div>
        )
    }
    render () {
        // sanity check, receiving images via props
        console.log(this.props.images);
        
        return (
            <div className={"photoGallery"}>
                <span className={"mainHeader"}> Photo Gallery </span>
                {   // when the images props is null or of length 0, render an empty state
                    (!this.props.images || !this.props.images.length) && this.renderEmpty()
                }
            </div>
        )
    }
}

export default PhotoGallery;