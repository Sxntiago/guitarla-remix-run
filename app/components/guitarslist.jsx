import React from "react";
import Guitar from "./guitar";

function GuitarsList({ guitars }) {
  return (
    <>
      <h2 className='heading'>Collection</h2>
      {guitars.length && (
        <div className='guitars-grid'>
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      )}
    </>
  );
}

export default GuitarsList;
