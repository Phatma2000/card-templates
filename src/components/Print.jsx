import React, {forwardRef, memo, useEffect} from 'react'
import {useReactToPrint} from "react-to-print"
const Print = forwardRef(({  }, ref) => {
 

  const handlePrint = useReactToPrint({
    content: () => ref.frontComponentRef.current?.firstChild?.firstChild,
    documentTitle: "emp-data",
  });
  const handlePrint1 = useReactToPrint({
    content: () => ref.frontComponentRef.current.lastChild.lastChild,
    documentTitle: "emp-data",
  });
//  console.log(ref.frontComponentRef.current?.firstChild?.firstChild);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "10px",
        }}
      >
        <button
          onClick={handlePrint}
          style={{
            color: "#fff",
            background: "#457b9d",
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "900",
          }}
        >
          Print Front
        </button>
        <button
          onClick={handlePrint1}
          style={{
            color: "#fff",
            background: "#457b9d",
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "900",
          }}
        >
          Print Back
        </button>
      </div>
    </>
  );
});

export default memo(Print);