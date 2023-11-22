
import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";

//component
function App() {
  // state hook (determines the visability of the hook) // false so its intialy hiden
  const[alertVisable,setAlertVisiblity]= useState(false);
  return (
    <div>
      {/* <Alert>
        Hello <span></span>world
      </Alert> */}
      {alertVisable && <Alert onClose={()=>setAlertVisiblity(false)}> My alert</Alert>}
      <Button color="primary" onClick={()=> console.log('btn 1 clicked')}>My Button</Button>
      <Button onClick={()=> setAlertVisiblity(true)}>Alert Button</Button>
    </div>

  );
}
//export App compnet so it could be used somewhere else

export default App;
