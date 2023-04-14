import React, { useState } from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {

  const [selectedYear ,setSelectedYear] = useState("No year selected");
  const [year ,setYear] = useState();

  function handleClick(e){
    console.log(e.target.value);
    if(e.target.value==''){
      setSelectedYear("No year selected");
    }
    else if(e.target.value==2018){
      setSelectedYear("Selected year-2018");
      setYear(2018);
    }
    else if(e.target.value==2019){
      setSelectedYear("Selected year-2019");
      setYear(2019);
    }
    else if(e.target.value==2020){
      setSelectedYear("Selected year-2020");
      setYear(2020);
    }
    else if(e.target.value==2021){
      setSelectedYear("Selected year-2021");
      setYear(2021);
    }
    else{
      setSelectedYear("Selected year-2022");
      setYear(2022);
    }
    
  }

  return (
    <div id="main">
      <select onClick={handleClick}>
        <option value={null} ></option>
        <option value="2018" >2018</option>
        <option value="2019" >2019</option>
        <option value="2020" >2020</option>
        <option value="2021" >2021</option>
        <option value="2022" >2022</option>
      </select>
      <div id='selected-year'>
           {selectedYear}<br></br>
           <ul>
           {Object.keys(data).map((index)=>
            <li key={index}>{data[year]}</li>
           )}
           </ul>
      </div>
    </div>
  )
}


export default App;
