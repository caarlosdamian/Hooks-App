import React from "react";

export const Small = React.memo(({ value=1 }) => {
  return <small>{value}</small>;
});
