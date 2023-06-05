import React from 'react';
import Header from './header/Header';

function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <header>
        <Header />
      </header>
      <main className='h-full'>{children}</main>
    </div>
  );
}

export default Layout;
