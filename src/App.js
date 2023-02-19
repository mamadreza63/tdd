import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
const Tesseract= require('tesseract.js');

const getHost = async () => {
  const res = await fetch(`${process.env.PUBLIC_URL}/api.json`);
  const { host } = await res.json();
  return function() {
    return host;
  };
}

const getUrl = async () => {
  const func1 = await getHost();
  console.log(func1());
  console.log(func1());
  console.log(func1());
  console.log(func1());
}
// let counter = 0
// let block = null
// setInterval(() => {
// block?.()
// }, 1000)
function App() {

  // getUrl();
  const [number, setNumber] = useState(0);
  const [par, setPAr] = useState('test')
  const numRef = useRef(null);
  const inputRef = useRef(null);


  // if(block == null){
  //   block = () =>{
  //     counter += 1
  //     console.log(counter)
  //     setNumber(counter)}
  // }

  useEffect(() => {
    // const idVal = setInterval(() => { 
    //   setNumber(prev => prev +1)
    //   console.log(idVal, numRef)
    //   if (numRef.current > 5)
    //     clearInterval(idVal);
    // }, 1000)
    // return () => console.log(numRef.current)
  }, [])

  const apiCall = () => {
    // Tesseract.recognize(
    //   // this first argument is for the location of an image it can be a //url like below or you can set a local path in your computer
    //   '/cards/--28348.png',
    //   // this second argument is for the laguage 
    //   'eng',
      
    //   { logger: m => console.log(m) }
    //   ).then(({ data: { text } }) => {
    //   console.log(text);
    //   })
    console.log(inputRef.current.value)
    eval(inputRef.current.value)
    setPAr(inputRef.current.value)
  }

  const generalCall = (param) => {
    // console.log(param1)
    console.log(param)
  }


  useEffect(() => {
    numRef.current = number
  }, [number])
  
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/another">another</Link>
            </li>
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <button onClick={() => apiCall = () => generalCall('1')}>call1</button> */}
        {/* <button onClick={() => apiCall = () => generalCall('2')}>call2</button> */}
        <input type='text' ref={inputRef}/>
        <button onClick={apiCall}>confirm</button>
        <button onClick={() => setNumber((prev) => prev + 1)}>increment</button>
        <p>{number}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p dangerouslySetInnerHTML={{ __html: par }}></p>
      </header>
    </div>
  );
}

export default App;

export const sum = (a, b) => a + b;
