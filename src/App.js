import React from "react";
import { Navbar } from "./components/Navbar";
import { AppRouter } from "./routes/AppRouter";
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
