function ListGroup() {
  //array /note let is a varable and can be reassigned  ,const is a constant , duhhhh lmao
  let items = ["New York", "San Diago", "Dubi", "Tokyo"];
  items = [];
  if (items.length === 0) return <p>No item found </p>;
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
          // react needs key property to identify each item. for the instant we can use "item" itself
          // when using an API or real world aplication each item has a propety key like "id" so example (item.id)
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
