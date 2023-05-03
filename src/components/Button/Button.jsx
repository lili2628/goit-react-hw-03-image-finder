import React from 'react';
import { LoadBtn } from './Button.styled'; 
import PropTypes from 'prop-types';

function Button({onClick}) {
    return (
        <LoadBtn type="buton" onClick={onClick}>
            Load more
        </LoadBtn>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;