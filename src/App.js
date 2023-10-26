// App.js
import React from 'react';
import Btn from './components/colorChangeButton';
import './custom.css'; // Import the custom styles

function App() {
  const resetColor = () => {
    document.body.style.backgroundColor = 'grey';
  };

  return (
    <div className="container text-center mt-5">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <Btn btnText="Black" btnColor="black" color="black" />
        <Btn btnText="White" btnColor="white" textColor="text-black" color="white" />
        <Btn btnText="Blue" btnColor="blue-800" color="blue" />
        <Btn btnText="Red" btnColor="red-800" color="red" />
        <Btn btnText="Yellow" btnColor="yellow-500" textColor="text-black" color="yellow" />
        <Btn btnText="Purple" btnColor="purple-500" color="purple" />
        <Btn btnText="Green" btnColor="green-500" color="green" />
      </div>

      <button className="btn btn-secondary mt-3" onClick={resetColor}>
        Reset Background Color
      </button>
    </div>
  );
}

export default App;


