import React, { useState, useEffect } from 'react';
import Header from './header/Header';

function Layout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if(!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="h-full">{children}</main>
    </div>
  );
}

export default Layout;
