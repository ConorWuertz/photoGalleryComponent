import React from 'react';
import './Image.scss';

class Image extends React.Component {

    render() {
        return (
            <div className={"imageContainer"}>
                <img className={"image"} src={ this.props.image.url} alt="Not found"/>
                <span className="caption"> { this.props.image.caption } </span>
            </div>
        )
    }
}

export default Image;