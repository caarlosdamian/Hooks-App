import React, {useState} from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import { Small } from "./Small";
export const Memorize = () => {
  const { state, increment } = useCounter(10);
  const [show, setshow] = useState(true);
  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h1>
        Counter: <Small value={state} />
      </h1>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-5"
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
