import "./App.css";
import { Fragment } from "react";
import { AutContext } from "./Component/Context";
import { CompA } from "./Component/CompA";
import { CompB } from "./Component/CompB";
import { CompC } from "./Component/CompC";

function App() {
  return (
    <Fragment>
      <div className="App">
        <AutContext>
          <CompA />
          <CompB />
          <CompC />
        </AutContext>
      </div>
    </Fragment>
  );
}

export default App;
