import React, { useState } from 'react'

function ColorBlock(props) {
  return (
    <div
      className="colorBlock"
      style={{'backgroundColor': props.color}}  
    >
      <p>{props.color}</p>
    </div>
  )
}

function App() {
  let colors = [
    'violet',
    'blue',
    'lightblue',
    'green',
    'greenyellow',
    'yellow',
    'orange',
    'red'
  ]

  let colorMap = colors.map((color, index) => {
    return (
      <ColorBlock key={index} color={color} />
    )
  })

  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
