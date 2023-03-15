import QuoteText from './quoteText'
import QuoteAuthor from './quoteAuthor' 
import GenQuote from './genQuote'
import GenTweet from './genTweet'

const QuoteBox = ({winWidth, winHeight, setNum, num, setQuote, setAuthor, author, quote}) => {  

    const quoteBoxStyle = {
        margin: "0 auto",
        position: "relative",
        width: "50%",
        height: "50%",
        backgroundColor: "grey",
        marginTop: (winHeight-(winHeight*.5))/2 + "px",
        borderRadius: "5px",
        paddingRight: "50px",
        paddingLeft: "50px",
        paddingTop: "40px",
        paddingBottom: "40px"
    }

    const box1 = { 
        height: "50%"
    }

    const box2 = { 
        height: "50%"
    }

    const box3 = {
        float: "left",
        height: "100%",
        width: "50%",
        display: "block" 
    }

    const box4 = { 
        height: "100%",
        width: "50%",
        float: "right", 
        display: "block" 
    }

    return (
        <div id="quotes" style={quoteBoxStyle}>
            <div style={box1}>
                <QuoteText num={num} setQuote={setQuote}/>
                <QuoteAuthor num={num} setAuthor={setAuthor}/>
            </div>
            <div style={box2}> 
                <div style={box3}>
                    <GenTweet author={author} quote={quote}/>
                </div>
                <div style={box4}>
                    <GenQuote setNum={setNum} />
                </div> 
            </div> 
        </div>
    )
} 

export default QuoteBox