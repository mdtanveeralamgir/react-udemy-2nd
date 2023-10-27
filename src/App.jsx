// src image this way
import reactImg from "./assets/react-core-concepts.png";
import Examples from "./Components/Examples";

function App() {
  return (
    <div>
      <header>
        {/* Don't src image this way */}
        <img src={reactImg} alt="Stylized atom" />
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </div>
  );
}

export default App;
