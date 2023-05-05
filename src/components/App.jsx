import React, {PureComponent} from 'react';
import { AppContainer, ErrorContainer } from './App.styled'; 
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';
import api from 'services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class App extends PureComponent { 
  state = {
    query: '',
    images: [],
    status: Status.IDLE,
    page: 1,
    error: '',
    bigImage: '',
    showModal: false,
    totalHits: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevState.query;
    const nextImages = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImages !== nextImages) {
      this.setState({
        status: Status.PENDING,
        page: 1,
        images: [],
      });
      this.searchQuery(nextImages, nextPage);
    }

    if (prevPage !== nextPage && nextPage !== 1) {
      this.searchQuery(nextImages, nextPage);
    }


     if (this.state.totalHits === 0) {
          toast.error('Nothing.', {position: toast.POSITION.TOP_RIGHT});
          return;
    };
  //  if (nextPage > 1) {
  //    window.scrollTo({
   //     top: document.documentElement.scrollHeight,
   //     behavior: 'smooth',
  //    });
  //  }

  }

  searchQuery = (nextImages, nextPage) => {
    api.apiSearchQuery(nextImages, nextPage)
      .then(data => {
        this.setState(prevState => {
          return {
            totalHits: data.totalHits,
            prevState,
            images: [...prevState.images, ...data.hits],
            status: Status.RESOLVED,
            searchQuery: nextImages,
          };
        });
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
    
  
  }  
  
  handleFormSubmit = query => {
    this.setState({ query, page: 1 });
  };

  toggleModal = largeImageURL => {
    this.setState(prevState => (
      {
      showModal: !prevState.showModal,
      bigImage: largeImageURL,
      }
    ));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, bigImage, status, error, showModal, totalHits } = this.state;

    if (status === Status.IDLE) {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </>
      );
    }

    if (status === Status.PENDING) {
      return <Loader />;
    }

    if (status === Status.REJECTED) {
      return (
        <ErrorContainer>
           {error}
        </ErrorContainer>
        );
    }

    if (status === Status.RESOLVED) { 
      return (
        <>
          <AppContainer>
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ImageGallery images={images} toggleModal={this.toggleModal} />
            {showModal && (
              <Modal onClickModal={this.toggleModal} image={bigImage} />
            )}
            {images.length !== totalHits && (
              <Button onClick={this.handleLoadMore} />
            )}
          </AppContainer>
          <ToastContainer autoClose={1000} theme={'colored'} />
        </>
      );
    }
  }
}

export default App;