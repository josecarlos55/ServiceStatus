import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Historic } from './components/Historic';
import ReactNotifications from 'react-notifications-component';
import Footer from './components/LayoutFooter/Footer';

import './custom.css'
import { AboutUs } from './components/LayoutAboutUs/AboutUs';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
  
        <Layout>
            <div>
                <div className="content wrap">
                    <ReactNotifications />
                    <Route exact path='/' component={Home} />
                   <Route path='/services' component={Services} />
                    <Route path='/AboutUs' component={AboutUs} />
                    <Route path='/historic' component={Historic} />
                </div>
                <Footer />
            </div>
      </Layout>
    );
  }
}