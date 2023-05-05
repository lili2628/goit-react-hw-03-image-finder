import React, {PureComponent} from 'react';
import { SearchbarContainer, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled'; 
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Searchbar extends PureComponent { 

  state = {
    query: '',
    page: 1,
  };

  onChangeInput = (e) => {
    const value = e.currentTarget.value.toLowerCase();

    this.setState({
      query: value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter your request.', {
    position: toast.POSITION.TOP_RIGHT
});
      return;
    }

    this.props.onSubmit(this.state.query, this.state.page);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
      page: 1,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div>
       <SearchbarContainer>
            <SearchForm onSubmit={this.onSubmitForm}>
                <SearchFormButton type="submit">
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.onChangeInput}
                />
            </SearchForm>
        </SearchbarContainer> 
        <ToastContainer autoClose={1000} theme={'colored'} />
      </div>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
    query: PropTypes.string,
};




