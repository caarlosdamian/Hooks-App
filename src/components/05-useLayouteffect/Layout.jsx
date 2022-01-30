import React from "react";
import { useCounterFetch } from "../../hooks/useCounterFetch";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounterFetch(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Layout</h1>
      <hr />
      <>
        <figure className="text-end">
          <blockquote className="blockquote">
            <p>{quote}</p>
          </blockquote>
        </figure>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={increment}
        >
          Siguiente Frase
        </button>
      </>
    </div>
  );
};
