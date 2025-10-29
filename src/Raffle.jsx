import React from 'react'
import { useState } from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';
import './Input.css'



const Raffle = () => {
  const [name, setname] = useState("");
  const [names, setnames] = useState([]);
  const [x, setx] = useState(0);
  const [selectedName, setselectedName] = useState("")
  const [araay, setarray] = useState([]);
  const [added,setadded] = useState(false);


  const handleName = (e) => {
    setname(e.target.value)


  }
  const handleClick = (e) => {
    const newId = uuidv4();
    setnames([...names, { id: newId, name, isCompleted: false }])

    setname("");
    setadded(true);


  }

  const handleDialog = (id) => {
    let newNames = [...names];
    console.log(`newnames ${newNames}`)
    let len = newNames.length;
    setx(Math.floor(Math.random() * len));
    console.log(`xxx ${x}`);

    let z = newNames[x];
    console.log(`z is the ${z}`, JSON.stringify(z))
    setselectedName(z);
    console.log(` item ${selectedName.name}`)
    let y = newNames.filter((item, i) => i !== x);
    console.log("jhghjghfhgfg",JSON.stringify(y));
    setnames(y);
    let arr = [...araay];
    arr.push(z)
    console.log("arr is " + JSON.stringify(arr))
    setarray(arr)
    console.log(`z is the ` + JSON.stringify(arr))

    setx(0)


  }
  return (
    <div className='background'>
      <div className='small_box'>
      <h1> Rafle Draw</h1>

      <><div className='container'>
        <input type='text' placeholder='Enter the Name' onChange={handleName} value={name} />
        
      </div>
       
        <div className='bts'>
          <input type='button' value="Add" onClick={handleClick} className='btn1'
          disabled={!name.trim()}/>
          <input type='button' className='btn1' value="Draw" onClick={((e) => handleDialog())} 
          disabled={names.length == 0}/>
          </div>
          {added?(<h3 className='heading_names'>Added Names</h3>):("")}
        {names.map((item) => {
          return (
            <div key={item.id} className='li'>
              <ul>
                <li >{item.name} </li>
              </ul></div>

          );
        })}
        <div>
          <div className='picked_names'><h3>picked name:</h3>
          {selectedName?(<h4>{selectedName.name}</h4>):
              (<h4>None</h4>)}</div>
          <h3>drawed Name </h3>
         <div className='about_listing'> 
          <h4> <ul>
  {araay.map((item, index) => (
    <><li key={index}>*{item.name}</li><br /></>
  ))}
</ul>
</h4>
</div>

        </div>

      </>
    </div>
    </div>
  )
}

export default Raffle