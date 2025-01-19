import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";

const Arena = () => {
  const [winner, setWinner] = useState("");
  const [opponents, setOpponents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cat1 = generateCat();
    const cat2 = generateCat();
    setOpponents([cat1, cat2]);
    setLoading(false);
  }, [winner]);

  const generateCat = () => {
    const name = "wow";
    const maxHealth = Math.ceil(Math.random() * 100);
    const damage = Math.ceil(Math.random() * 10);
    const image = "";
    return { name, damage, maxHealth, image };
  };

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <CatCard
            name={opponents[0].name}
            health={opponents[0].maxHealth}
            damage={opponents[0].damage}
            image={opponents[0].image}
          />
          <CatCard
            name={opponents[1].name}
            health={opponents[1].maxHealth}
            damage={opponents[1].damage}
            image={opponents[1].image}
          />
        </>
      )}
    </div>
  );
};

export default Arena;
