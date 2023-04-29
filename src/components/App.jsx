import React, {Component} from 'react';
import { AppContainer } from './App.styled'; 
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';

class App extends Component { 

  state = {
    query: '',
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  searchQuery = (data) => {

  }


  render() {
    const { query } = this.state;

    return (
      <AppContainer>
      <Searchbar onSubmit={this.searchQuery} />
      <ImageGallery>
          <ImageGalleryItem />
          <Modal/>
      </ImageGallery>
      </AppContainer>
    );
  }
}

export default App;