import React from 'react';
import { LoaderChar } from './Loader.styled'; 
import { createPortal } from 'react-dom';
import { ColorRing } from 'react-loader-spinner';


const loaderRoot = document.querySelector('#loader-root');

function Loader() {
    return createPortal(
        <LoaderChar>
        <ColorRing
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        </LoaderChar>,
        loaderRoot
    );
}

export default Loader;