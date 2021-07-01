import React from "react";

const Avatar = (props) => {
    const {size = 128, circle = true, src, alt} = props;
    return (
        <figure className={`image is-${size}x${size}`}>
            <img
                className={circle ? 'is-rounded' : ''}
                src={src}
                alt={alt}
            />
        </figure>
    );
}

export default Avatar;
