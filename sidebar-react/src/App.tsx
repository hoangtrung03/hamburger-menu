import { useState } from "react";
import "./App.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import Collapse from "./components/Collapse/Collapse";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Collapse title='test' >Test</Collapse>
        <Collapse title='test' >Test</Collapse>
        <Collapse title='test' >Test</Collapse>
        <Collapse title='test' >Test</Collapse>
        <Collapse title='test' >Test</Collapse>
      </div>
      <button
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
    </>
  );
}

export default App;
