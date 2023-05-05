import { useState } from "react";
import Counter  from "./iu/components/Counter";
import List from "./iu/components/list/idex";
import './styles.css'
function App() {
  const [uri, setUri]=useState('')
  const clickHandler = (url) => {
    setUri(url)
    //console.log(`url to send ${uri}`)
  }
  return (
    <div className="countainer">
      <Counter uri={uri}/>
      <List clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
