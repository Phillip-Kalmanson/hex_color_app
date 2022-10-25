import React, {useState, useRef, useEffect} from "react";
import ColorBox from "./ColorBox";
import './App.css';

function App() {

  const [color, setColor] = useState(generateColor)
  
  const [buttonText, setButtonText] = useState(generateButtonText(color))

  const [labelText, setLabelText] = useState("")

  const [labelColor, setLabelColor] = useState(false)


  function generateColor() {
    const randomColor = "#".concat(Math.floor(Math.random()*16777215).toString(16));
    return randomColor
  }
  function chooseRndButton() {
    const num = Math.floor(Math.random() * (3) + 1)
    return num
  }
  function generateButtonText(corr_color) {
    const correctButton = chooseRndButton()
    const dummy_color_1 = generateColor()
    const dummy_color_2 = generateColor()
    if (correctButton === 1){
      return [corr_color, dummy_color_1, dummy_color_2]
    }
    else if (correctButton === 2) {
      return [dummy_color_1, corr_color, dummy_color_2]
    }
    else if (correctButton === 3) {
      return [dummy_color_1, dummy_color_2, corr_color]
    }
  }
  function handleColorSwitch() {
    const newColor = generateColor()
    setColor(newColor)

    const newButtonText = generateButtonText(newColor)
    setButtonText(newButtonText)
  }
  function handleCheckAnswer_btn0(){
    if (buttonText[0] === color){
      setLabelText("CORRECT!")
      setLabelColor(true)
      handleColorSwitch()
    }
    else {
      setLabelColor(false)
      setLabelText("WRONG!")
    }
  }
  function handleCheckAnswer_btn1(){
    if (buttonText[1] === color){
      setLabelText("CORRECT!")
      setLabelColor(true)
      handleColorSwitch()
    }
    else {
      setLabelColor(false)
      setLabelText("WRONG!")
    }
  }
  function handleCheckAnswer_btn2(){
    if (buttonText[2] === color){
      setLabelText("CORRECT!")
      setLabelColor(true)
      handleColorSwitch()
    }
    else {
      setLabelColor(false)
      setLabelText("WRONG!")
    }
  }
  return (
    <>
      <div class="center">
        <ColorBox color={color}/>
      </div>
      <div class="center">
        <button onClick={handleCheckAnswer_btn0}>{buttonText[0]}</button>
        <button onClick={handleCheckAnswer_btn1}>{buttonText[1]}</button>
        <button onClick={handleCheckAnswer_btn2}>{buttonText[2]}</button>
      </div>
      <div class="center">
        <label style={{color: labelColor ? 'green' : 'red'}}>{labelText}</label>
      </div>
    </>
  );
}

export default App;
