import { useState} from 'react'

const GenQuote = ({setNum}) => { 
 
    const getR = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    } 

    let num = getR(0,6)

    const [randomNum, setRandomNum] = useState(num)

    const gen = {
        backgroundColor: "black",
        height: "50px",
        width: "100px",
        float: "right",
        color: "white", 
        borderRadius: "5px", 
        margin: "0 auto", 
        marginRight: "25%",
        marginTop: "15%"
    }

    const handleClick = () => { 
        setNum(getR(0,6))
    }
    
    return (
        <div id="new-quote" style={gen} onClick={handleClick} ><a><p>CLICK</p></a></div>
    )

}

export default GenQuote