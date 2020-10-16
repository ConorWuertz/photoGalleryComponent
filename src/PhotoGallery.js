import React from 'react';


class PhotoGallery extends React.Component {
    render () {
        // sanity check, receiving images via props
        console.log(this.props.images);
        return (
            <div className={"photoGallery"}>
                <div className={"mainHeader"}/>
            </div>
        )
    }
}

export default PhotoGallery;