import React from 'react';
import {subscribeToTimer} from "./api";

function App() {

  const [timestamp, setTimestamp] = React.useState("No timestamp yet")

  React.useEffect(()=>{
    subscribeToTimer((err, timestamp) => {
      setTimestamp(timestamp)
    })
  } , []);

  // console.log("TIMESTAMP" , timestamp)

  return (
    <>{timestamp}</>
  );
}

export default App;
