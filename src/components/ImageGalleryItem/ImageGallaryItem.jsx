import React from 'react';
import { GallaryItem, Picture } from './ImageGallaryItem.styled'; 
import PropTypes from 'prop-types';

function ImageGalleryItem({id, webformatURL, tags, largeImageURL, onClickItem}) {
    return (
                <GallaryItem key={id}>
                    <Picture
                        src={webformatURL}
                        alt={tags}
                        data-source={largeImageURL}
                        onClick={onClickItem} />
                </GallaryItem>
            );
}


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClickItem: PropTypes.func,
};
