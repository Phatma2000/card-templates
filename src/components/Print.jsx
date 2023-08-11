import React, { forwardRef, memo, useEffect } from "react";
// import ReactDOMServer from "react-dom/server";
// import { useReactToPrint } from "react-to-print";

const Print = forwardRef((props, ref) => {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");

    const visitCardContent =
      ref.frontComponentRef.current?.firstChild?.firstChild;
    if (visitCardContent) {
      const contentToPrint = visitCardContent.cloneNode(true);
      const linkTags = document.querySelectorAll('link[rel="stylesheet"]');

      printWindow.document.head.innerHTML = `
    <style>
      @page {
        size: 400px 230px; 
        margin: 0;
      }
      body {
        margin: 0;
        // -webkit-print-color-adjust: exact;
        // print-color-adjust: exact;
        width: 400px; 
        height: 230px;
        // overflow: hidden;
      }
    </style>
  `;

      printWindow.document.body.appendChild(contentToPrint);
      linkTags.forEach((link) =>
        printWindow.document.head.appendChild(link.cloneNode(true))
      );
    } else {
      console.error("Visit card content not found.");
      printWindow.close();
      return;
    }

    printWindow.print();
    printWindow.close();
  };

  // const handlePrint1 = useReactToPrint({
  //   content: () => ref.frontComponentRef.current?.lastChild?.lastChild,
  //   documentTitle: "emp-data",
  // });

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
          // onClick={handlePrint1}
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
