function ListGroup() {
  //array
  const items = ["New York", "San Diago", "Dubi", "Tokyo"];
  //array has a method to map items of a difrent type.
  //convert each item to an li elenent dynamicly
  items.map((item) => <li>{item}</li>);
  // Note cant use "className" word becauase its a reserved key word in javascript or type script
  //JSX markup
  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {items.map((item) => (
          <li> {item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
