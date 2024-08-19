import { useState } from "react";


const ChangeColor = () => {
  const [color, setColor] = useState(''); // State for storing voitures

  const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'
  ]

  const handleInputChange = (e) => {
    setColor(e.target.value); // Update the state when the input changes
  };

  const handleStyle = {
      border:" 1px solid black",
      margin: "20px",
      padding: "30px",
      borderRadius: "10px",
      backgroundColor: color,
      color: "white",
      textAlign: "center"
  }
console.log(color);
  return (

  <>
    <div>
     <select onChange={handleInputChange} value={color}>
     <option value={''}>Selected color</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
    </div>
    <div>
      <p className="color-box" style={handleStyle} >
        change color to : {color}
      </p>
    </div>
  </>
  );
};

export default ChangeColor;
