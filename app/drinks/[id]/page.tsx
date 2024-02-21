import Image from "next/image";
import Link from "next/link";

const fetchDrink = async (id: string): Promise<Drink> => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("falopa error");
  }
  const data = await res.json();
  return data.drinks[0];
};

const listIngredients = (drink: Drink): string[] => {
  return Array.from({ length: 15 }, (_, i) => {
    const ingredient = drink[`strIngredient${i + 1}`];
    const measure = drink[`strMeasure${i + 1}`];
    return ingredient && measure ? `${ingredient} - ${measure}` : ingredient;
  }).filter(Boolean);
};

const Drink = async ({ params }: any) => {
  const foundedDrink = await fetchDrink(params.id);
  const ingredients = listIngredients(foundedDrink);
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        {`<- Back to drinks`}
      </Link>
      <h1 className="text-7xl">{foundedDrink.strDrink}</h1>
      <p className="mb-4">{foundedDrink.strCategory}</p>
      <Image
        src={foundedDrink.strDrinkThumb || "https://via.placeholder.com/150"}
        alt={foundedDrink.strDrink}
        width={150}
        height={150}
      />
      <p>{foundedDrink.strInstructions}</p>

      <h2 className="text-2xl mb-4 mt-4">Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Drink;
