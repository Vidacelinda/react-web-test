function ListGroup() {
  //array /note let is a varable and can be reassigned  ,const is a constant , duhhhh lmao
  let items = ["New York", "San Diago", "Dubi", "Tokyo"];
//   items = [];
  //array has a method to map items of a difrent type.
  //convert each item to an li elenent dynamicly
  items.map((item) => <li>{item}</li>);
  //JSX markup
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          // react needs key property to identify each item. for the instant we can use "item" itself
          // when using an API or real world aplication each item has a propety key like "id" so example (item.id)
          <li className="list-group-item" key={item} onClick={()=>console.log(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
