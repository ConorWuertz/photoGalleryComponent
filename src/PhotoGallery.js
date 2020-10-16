import React from 'react';
import './PhotoGallery.scss';
import Image from "./Image";

class PhotoGallery extends React.Component {

    constructor(props) {
        super(props);
        this.renderCurrentImage =this.renderCurrentImage.bind(this);
        this.imagesEmptyOrInvalid =this.imagesEmptyOrInvalid.bind(this);
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
        return <Image image={this.props.images[this.state.currImageIndex]}/>
    }

    renderEmpty() {
        return (
            <div className={"emptyGalleryContent"}>
                There are no photos in this gallery. Try adding passing some to the PhotoGallery component!
            </div>
        )
    }

    imagesEmptyOrInvalid() {
        return !this.props.images || !this.props.images.length;
    }

    render () {
        let leftPointerClasses = "scrollButton scrollLeftButton";
        if (this.imagesEmptyOrInvalid() || this.state.currImageIndex === 0) {
            leftPointerClasses+=" disabled"
        }

        let rightPointerClasses = "scrollButton scrollRightButton";
        if (this.imagesEmptyOrInvalid() || this.state.currImageIndex > this.props.images.length - 2) {
            rightPointerClasses+=" disabled"
        }
    
        return (
            <div className={"photoGallery"}>
                <span className={"mainHeader"}> Photo Gallery </span>
                <div className={"horizontalContainer"}>
                    <span className={leftPointerClasses} onClick={this.onClickLeft} />

                    {   // when the images props is null or of length 0, render an empty state. Otherwise, render the currently selected image
                        this.imagesEmptyOrInvalid() ? this.renderEmpty() : this.renderCurrentImage()
                    }
                    <span className={rightPointerClasses} onClick={this.onClickRight}/>
                </div>
            </div>
        )
    }
}

export default PhotoGallery;