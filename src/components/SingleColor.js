import React, { useState } from "react";

function SingleColor({ index, rgb, weight, ...rest }) {
  const [alert, setAlert] = useState(false);
  const { hexValue } = { ...rest };

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    if (navigator.clipboard.writeText.length === 1) {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };

  return (
    <article
      style={{
        backgroundColor: `${hexValue}`,
        height: "150px",
        cursor: "pointer",
        color: `${index > 10 && "#fff"}`,
      }}
      onClick={handleClick}
    >
      <div className="p-5">
        <p>{weight}%</p>
        <span>{hexValue}</span>
        {alert && (
          <p className="animate-bounce color-[#ddd2d2]">Copied to Clipboard</p>
        )}
      </div>
    </article>
  );
}

export default SingleColor;
