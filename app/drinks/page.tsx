import React from "react";

import DrinkList from "@/components/DrinkList";

type Drink = {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
};

const fetchDrikns = async () => {
  const URL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("falopa error");
  }
  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrikns();

  return (
    <div>
      <h1 className="text-7xl mb-4">DrinksPage</h1>
      <DrinkList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
