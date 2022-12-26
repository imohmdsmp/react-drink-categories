import React from 'react';

export default function Foods({ drinks }) {

  return drinks.map((value) => {
    return (
      <article
        className="col-auto align-items-start"
        key={value.id}
        data-get={value.when}
      >
        <img src={value.strDrinkThumb} alt="" />
        <div className="px-5">
          <div className="d-flex flex-wrap justify-content-between ">
            <h2>{value.strDrink}</h2>
            <h5>{value.strGlass}</h5>
          </div>
          <p>{value.strInstructions}</p>
        </div>
      </article>
    );
  });
}
