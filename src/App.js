import logo from "./logo.svg";
import "./App.css";
import CallApi from "./Components/CallApi";
import HookCounter from "./Components/HookCounter";
import HookClock from "./Components/HookClock";
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{showClock ? <HookClock /> : "No Clock"}</p>
        <button onClick={() => setShowClock(!showClock)}>toggle clock</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HookCounter />
      <HookCounter name="Sam" />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";

// import "./App.css";
// import CallApi from "./Components/CallApi";
// import HookCounter from "./Components/HookCounter";
// import HookClock from "./Components/HookClock";

// import { useState } from "react";
// function App() {
//   const [showClock, setShowClock] = useState(true);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>{showClock ? <HookClock /> : "No Clock"}</p>
//         <button onClick={() => setShowClock(!showClock)}>toggle clock</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <HookCounter />
//       <HookCounter name="Sam" />
//     </div>
//   );
// }

// export default App;
