import React from 'react';

function Layout({ children }) {
  return (
    <>
      <header>
        <div>Header</div>
      </header>
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
}

export default Layout;
