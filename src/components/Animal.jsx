import { data } from "../utils/constants.js";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  return (
    <img src={animal.image} alt={animal.name} style={{ maxWidth: "75%" }} />
  );
}

export default Animal;
