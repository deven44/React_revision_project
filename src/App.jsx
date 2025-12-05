import { useState } from "react";

const App = ()=>{
  const [count, setCount] = useState(0);
return (
  <>
 <h1>COUNT IS: {count}</h1> 
 <button onClick={()=> setCount(count+1)} >INCREASE COUNT</button>
  </>
)
}
export default App;