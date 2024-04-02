import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DrinkListProps {
  drinks: Drink[];
}

const DrinkList: React.FC<DrinkListProps> = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li
          key={drink.idDrink}
          className="menu-diff-item-1 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <Link
            href="/drinks/[id]"
            as={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb || "/placeholder.png"}
                alt={drink.strDrink}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                className="rounded-md object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">{drink.strDrink}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
