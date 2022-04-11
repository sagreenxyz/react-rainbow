import React, { useState } from 'react'

function ColorForm(props) {
  let [input, setInput] = useState('')

  const isColor = (color) => {
    let myStyle = new Option().style
    myStyle.color = color
    return myStyle.color === color
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isColor(input)) {
      props.addColor(input)
      e.target.reset()
    } else {
      e.target.reset()
      return
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
}

function ColorBlock(props) {
  return (
    <div
      className="colorBlock"
      style={{ 'backgroundColor': props.color }}
    >
      <p>{props.color}</p>
    </div>
  )
}

function App() {
  let [colors, setColors] = useState([
    'violet',
    'blue',
    'lightblue',
    'green',
    'greenyellow',
    'yellow',
    'orange',
    'red'
  ])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  let colorMap = colors.map((color, index) => {
    return (
      <ColorBlock key={index} color={color} />
    )
  })

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
