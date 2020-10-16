import React from 'react';
import './App.css';


class PhotoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.renderCurrentImage =this.renderCurrentImage.bind(this);
        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
        this.state = {
            currImageIndex: 0
        }
    }


    onClickLeft() {
        this.setState((prev, props) => ({
                currImageIndex: Math.max(0, prev.currImageIndex - 1)
            }
        ))
    }

    onClickRight() {
        this.setState((prev, props) => ({
                currImageIndex: Math.min(props.images.length -1, prev.currImageIndex + 1)
            }
        ))
    }


    renderCurrentImage() {
        return (
            <img src={ this.props.images[this.state.currImageIndex].url }></img>
        )
    }

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
                {   // when the images props is null or of length 0, render an empty state. Otherwise, render the currently selected image
                    (!this.props.images || !this.props.images.length) ? this.renderEmpty() : this.renderCurrentImage()
                }
                <span className="scrollButton scrollLeftButton" onClick={this.onClickLeft}> Prev </span>
                <span className="scrollButton scrollRightButton" onClick={this.onClickRight}> Next </span>
            </div>
        )
    }
}

export default PhotoGallery;