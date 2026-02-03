import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.css";

const Raffle = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [pickedNames, setPickedNames] = useState([]);
  const [added, setAdded] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);

  const handleAdd = () => {
    const newId = uuidv4();
    setNames([...names, { id: newId, name }]);
    setName("");
    setAdded(true);
  };

  const handleDraw = () => {
    if (names.length === 0) return;

    const randomIndex = Math.floor(Math.random() * names.length);
    const drawn = names[randomIndex];

    setSelectedName(drawn);
    setNames(names.filter((_, i) => i !== randomIndex));
    setPickedNames([...pickedNames, drawn]);
  };

  return (
    <div className="background">
      <div className="small_box">
        <h1>Raffle Draw</h1>

        {/* Input */}
        <div className="input_section">
          <input
            type="text"
            placeholder="Enter the Name"
            value={name}
            onChange={handleNameChange}
          />
          <button onClick={handleAdd} disabled={!name.trim()} className="btn1">
            Add
          </button>
        </div>

        {/* Draw Button */}
        <div className="bts">
          <button
            onClick={handleDraw}
            disabled={names.length === 0}
            className="btn1"
          >
            Draw
          </button>
        </div>

        {/* Added Names */}
        {added && (
          <>
            <h3 className="heading_names">Added Names</h3>
            <ul>
              {names.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </>
        )}

        {/* Picked Name */}
        <div className="picked_names">
          <h3>Picked Name:</h3>
          <h4>{selectedName ? selectedName.name : "None"}</h4>
        </div>

        {/* Drawn Names */}
        <h3>Drawn Names</h3>
        <ul>
          {pickedNames.map((item, index) => (
            <li key={index}>*{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Raffle;
