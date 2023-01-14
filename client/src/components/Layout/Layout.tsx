import React from "react";
import ToolBar from "../ToolBar/ToolBar";
import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="react-layout">
      <Header />
      <Content>{children}</Content>
      <ToolBar />
    </div>
  );
};

export default Layout;
