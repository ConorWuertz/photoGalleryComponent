import React from 'react';


class Image extends React.Component {

    render() {
        return (
            <>
                <img src={ this.props.image.url}/>
                <span className="caption"> { this.props.image.caption } </span>
            </>
        )
    }
}

export default Image;