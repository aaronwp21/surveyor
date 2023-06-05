import React from 'react';
import Header from './header/Header';

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
}

export default Layout;
