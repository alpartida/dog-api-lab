import React from 'react'

function ImageCarousel(props) {
    return (
        <div className="img row">
            {props.images.map(image => {
                return (
                    <div className="col-sm">
                    <img className = "img-fluid" src={image} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default ImageCarousel