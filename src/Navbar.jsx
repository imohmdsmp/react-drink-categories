import React from 'react';

export default function Navbar({ data }) {
  const hanleDrink = (e) => {
    const articles = [...document.querySelectorAll('article')];

    articles.map((items) => {
      items.style.display = 'none';
      if (
        items.getAttribute('data-get') ==
        e.target.getAttribute('data-to')
      ) {
        items.style.display = 'flex';
      }
    });
  };

  const removeRepate = [
    ...new Set(
      data.drinks.map((i) => {
        return i.when;
      })
    ),
  ];

  return (
    <ul className="list-menu">
      {removeRepate.map((count, index) => {
        return (
          <li onClick={hanleDrink} key={index} data-to={count}>
            {count}
          </li>
        );
      })}
    </ul>
  );
}
