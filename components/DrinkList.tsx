import Link from "next/link";
import React from "react";

interface DrinkListProps {
  drinks: Drink[];
}

const DrinkList: React.FC<DrinkListProps> = ({ drinks }) => {
  return (
    <ul className=" menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className="menu-item">
          <Link
            href="/drinks/[id]"
            as={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
