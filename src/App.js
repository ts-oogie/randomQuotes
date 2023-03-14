import  QuoteBox from './components/quoteBox' 
import {useEffect, useState} from 'react'
import './App.css' 


function App() {

  const [winWidth, setWinWidth] = useState(0)
  const [winHeight, setWinHeight] = useState(0)
  const [num, setNum] = useState(Math.floor(Math.random() * (6 - 0) + 0)) 

  const [quote, setQuote] = useState(null)
  const [author, setAuthor] = useState(null)

  const appStyle = {
    width: winWidth,
    height: winHeight 
  }

  useEffect(()=>{
    setWinWidth(window.innerWidth)
    setWinHeight(window.innerHeight)  
  }) 

  return (
    <div className="App" style={appStyle} >
       <QuoteBox 
          winWidth={winWidth}
          winHeight={winHeight} 
          setNum={setNum} 
          num={num} 
          setQuote={setQuote} 
          setAuthor={setAuthor}
          quote={quote}
          author={author}
        /> 
    </div>
  );
} 

export default App;
