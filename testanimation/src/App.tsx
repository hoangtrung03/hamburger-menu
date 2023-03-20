import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          ipsam officia pariatur laboriosam nam suscipit voluptas placeat nulla
          et? Quas commodi deserunt necessitatibus quisquam iusto aspernatur et,
          veniam provident ipsam?
        </p>
      </section>

      <div className="nav-toggle">
        <input type="checkbox" id="navi-toggle" className="checkbox" />
        <label htmlFor="navi-toggle" className="button">
          <span className="icon">&nbsp;</span>
        </label>
        <div className="background">&nbsp;</div>
        <nav className="nav">
          <ul className="list">
            <li className="item">
              <a className="link"> Link 1 </a>
            </li>
            <li className="item">
              <a className="link"> Link 2 </a>
            </li>
            <li className="item">
              <a className="link"> Link 4 </a>
            </li>
            <li className="item">
              <a className="link"> Link 5 </a>
            </li>
            <li className="item">
              <a className="link"> Link 6 </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
