import React, { Component } from 'react';

// COMPS
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
         );
    }
}
 
export default Layout;