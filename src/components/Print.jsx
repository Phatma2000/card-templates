import React, { forwardRef, memo, useContext, useEffect } from "react";

import { useReactToPrint } from "react-to-print";
import Store from "./context/store";

const Print = forwardRef((props, ref) => {

const {cards}=useContext(Store)
console.log(cards);


  const handlePrint1 = useReactToPrint({
    content: () => ref.frontComponentRef.current?.lastChild?.lastChild,

    documentTitle: "business-card",
    pageStyle: `
      @page {
       size: 3in 2in;
        margin: 0;
        border-radius: 10px !important;
      } 
     body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    html {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
     #sizer {
      /* Adjust the size of the content inside the 'sizer' element */
      width: 100%;
      height: 100%;
      /* Add any additional styling you need for the content */
    }
     

        `,
  });

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
          // onClick={handlePrint}
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
