import Alert from "./components/alert";
import Button from "./components/button";

//component
function App() {
  return (
    <div>
      <Alert>
        Hello <span></span>world
      </Alert>
      <Button color="primary" onClick={()=> console.log('btn 1 clicked')}>My Button</Button>
      <Button onClick={()=> console.log('btn 2 clicked')}>My Button</Button>
    </div>

  );
}
//export App compnet so it could be used somewhere else
export default App;
