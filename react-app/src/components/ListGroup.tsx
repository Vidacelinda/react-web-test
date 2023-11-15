//itme 

import { useState } from "react";

//
//type anotations to spefify the type of properties
interface ListGroupProps{
    items:string[];
    heading:string;
}

function ListGroup({items,heading}:ListGroupProps) {


  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //JSX markup
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // react needs key property to identify each item. for the instant we can use "item" itself
          // when using an API or real world aplication each item has a propety key like "id" so example (item.id)
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
