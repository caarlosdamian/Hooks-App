import React, { useState, useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
export const MemoHook = () => {
  const { state, increment } = useCounter(5000);
  const [show, setshow] = useState(true);
 

  const procesosuperpesado = useMemo(() => procesoPesado(state), [state]);
  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <p>{procesosuperpesado}</p>
      <h1>
        Counter: <small>{state}</small>
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
