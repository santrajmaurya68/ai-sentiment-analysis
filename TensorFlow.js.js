// const Sentiment = require('vader-sentiment');

// // Instantiate a Sentiment object
// const analyzer = new Sentiment();

// // Get sentiment scores for a piece of text
// const text = "This is a test sentence.";
// const scores = analyzer.polarity_scores(text);

// // Print the sentiment scores
// console.log(scores);
const vader = require('vader-sentiment')
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

app.use(express.json())
  app.post('/',  (req, res) => {
    try {
      // const input = req.body;
     const user =  res.send(req.body);
      console.log(user.req.body.input)
      const  input = user.req.body.input
       const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
   //    console.log(intensity)
       if(intensity.compound>0.5){
        console.log("it as positive")
        console.log(intensity.compound)
     }
     else if(intensity.compound<0.5){
         console.log("it as negative")
         console.log(intensity.compound)
     }
     else{
         console.log("it as neutral")
         console.log(intensity.compound)
     }
  //   console.log(intensity);
   //   res.status(201).json(intensity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }); 
  app.listen(5000, function () {
    console.log('Server listening on port 5000');
  });  
// const vader = require('vader-sentiment');
// const input = ' manish is very bad person';
// const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
// if(intensity.compound>0.5){
//    console.log("it as positive")
//    console.log(intensity.compound)
// }
// else if(intensity.compound<0.5){
//     console.log("it as negative")
//     console.log(intensity.compound)
// }
// else{
//     console.log("it as neutral")
//     console.log(intensity.compound)
// }
// console.log(intensity);