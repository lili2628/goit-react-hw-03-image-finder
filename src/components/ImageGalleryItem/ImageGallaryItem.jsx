import React, {Component} from 'react';
import { GallaryItem, Picture } from './ImageGalleryItem.styled'; 
import PropTypes from 'prop-types';



function ImageGalleryItem({pictures}) {
    return (
        <GallaryItem>
            <Picture src="" alt="" />
        </GallaryItem>
        );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    pictures: PropTypes.array.isRequired,
};