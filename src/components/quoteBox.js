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
        paddingTop: "40px"
    }

    return (
        <div id="quotes" style={quoteBoxStyle}>
            <QuoteText num={num} setQuote={setQuote}/>
            <QuoteAuthor num={num} setAuthor={setAuthor}/>
            <div id="row">
            <GenQuote setNum={setNum} />
            <GenTweet author={author} quote={quote}/>
            </div>
            
        </div>
    )
} 

export default QuoteBox