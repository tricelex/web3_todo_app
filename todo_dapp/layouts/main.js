import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import BaseLayout from './base';
import Page from './page';
import Footer from './footer';
import { AuthContext } from '../contexts/auth';

const MainLayout = ({ children }) => {
  return (
    <BaseLayout>
      <div id="app-container">
        {/* <Header user={user} onLogout={removeAuth} /> */}
        <Header/>
        <Page>{children}</Page>
        <Footer />
      </div>
    </BaseLayout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;
