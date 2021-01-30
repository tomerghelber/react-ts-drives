import React from "react";
import { Cards } from "react-responsive-cards";

const details = [
  {
    title: "WW84",
    description: "Wonder womens 1984",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTh6DdPBhzs5OuDYGiYTqRh6YyLWQV8bUOuL7d0TBD8o9zk15fq",
    renderFooter: <div>{"Intresting non text info"}</div>,
    handleOnClick: () => alert("Custom Event")
  }
];

export default () => (
  <div>
    <h1>Hello React!</h1>
    <p>Start editing to see some magic happen :)</p>
    <Cards details={details} />
  </div>
);
