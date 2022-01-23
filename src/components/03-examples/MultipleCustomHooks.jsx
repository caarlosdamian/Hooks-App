import React from "react";
import { useCounterFetch } from "../../hooks/useCounterFetch";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounterFetch(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>BreakinfBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        <>
          <figure className="text-end">
            <blockquote className="blockquote">
              <p>{quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">{author}</figcaption>
          </figure>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={increment}
          >
            Siguiente Frase
          </button>
        </>
      )}
    </div>
  );
};
