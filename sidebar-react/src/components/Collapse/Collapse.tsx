import React, { useState, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getContentHeight = (): number => {
    return contentRef.current ? contentRef.current.scrollHeight : 0;
  };

  const contentStyle = {
    height: isExpanded ? `${getContentHeight()}px` : "0px",
    transition: "height 0.2s ease-in-out",
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={toggleExpand}>
        {title}
        <BsChevronDown
          className={`collapse__icon ${
            isExpanded ? "collapse__icon--expanded" : ""
          }`}
        />
      </div>
      <div className="collapse__content" style={contentStyle} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
