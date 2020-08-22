import React from "react";

export default function Title({ children }) {
  return (
    <div className="section-title">
      <h1>{children}</h1>
      <hr />
    </div>
  );
}
