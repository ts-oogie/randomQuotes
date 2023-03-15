import {useState, useEffect} from 'react'

const GenTweet = ({author, quote}) => {

    const [tweet, setTweet] = useState("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=")
    const [thisAuthor, setThisAuthor] = useState(null)
    const [thisQuote, setThisQuote] = useState(null)

    const tweetStyle = {
        backgroundColor: "white",
        height: "50px",
        width: "100px",
        float: "left",
        color: "black", 
        borderRadius: "5px", 
        margin: "0 auto", 
        marginLeft: "25%",
        marginTop: "15%"
    }


    useEffect(() => {
        setThisAuthor(author)
        setThisQuote((quote+" ").split(" ").join("%20")) 
    })

    return (
        <div id="tweet-quote" style={tweetStyle}><a href={tweet+thisQuote+thisAuthor} target="_blank"><p>Tweet</p></a></div>
    )

}

export default GenTweet