import React, {Component} from 'react';
import { GallaryContainer } from './ImageGallery.styled'; 
import PropTypes from 'prop-types';


function ImageGallery({ children }) {
  return <GallaryContainer>{children}</GallaryContainer>;
}

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};