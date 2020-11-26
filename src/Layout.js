import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';


const Layout = (props) => {

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;