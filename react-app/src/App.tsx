// import Message from './Message' ;
import ListGroup from "./components/ListGroup";
//have the message compnnent in here too

//component
function App() {
  // return <div><Message/></div>
  let items = ["New York", "San Diago", "Dubi", "Tokyo"];
  const handleSelectItem=(item:string)=>{
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}
//export App compnet so it could be used somewhere else
export default App;
