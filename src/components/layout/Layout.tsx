import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="bg-gray-900 h-screen py-10">{children}</div>;
};

export default Layout;
