import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  const location = useLocation().pathname;
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (contentRef.current) contentRef.current.scroll({ top: 0 });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <section className="react-content">
      <div className="wrapper" ref={contentRef}>
        <div className="react-content-wrapper">{children}</div>
      </div>
    </section>
  );
};

export default Content;
