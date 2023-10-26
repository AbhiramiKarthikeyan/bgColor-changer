// colorChangeButton.jsx
import React from 'react';

function Btn({ btnText, btnColor, textColor = 'text-white', color = '' }) {
  function bgColorChange() {
    document.body.style.backgroundColor = color;
  }

  return (
    <button
      className={`bg-${btnColor} ${textColor} rounded-3xl p-2 mx-2`}
      onClick={bgColorChange}
    >
      {btnText}
    </button>
  );
}

export default Btn;
