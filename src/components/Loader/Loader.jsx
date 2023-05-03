import React from 'react';
import { LoaderChar } from './Loader.styled'; 
import { createPortal } from 'react-dom';
import { Audio } from 'react-loader-spinner';


const loaderRoot = document.querySelector('#loader-root');

function Loader() {
    return createPortal(
        <LoaderChar>
        <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
        </LoaderChar>,
        loaderRoot
    );
}

export default Loader;