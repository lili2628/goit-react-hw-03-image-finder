import React, {Component} from 'react';
import { SearchbarContainer, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled'; 
import PropTypes from 'prop-types';


class Searchbar extends Component { 

  state = {
    query: '',
  };

  onChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
        <SearchbarContainer>
            <SearchForm onSubmit={this.onSubmitForm}>
                <SearchFormButton type="submit">
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    name="query"
                    value={query}
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.onChangeInput}
                />
            </SearchForm>
        </SearchbarContainer>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
    query: PropTypes.string,
};




