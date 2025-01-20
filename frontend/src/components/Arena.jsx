import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";
import "../styles/Arena.css";

const Arena = () => {
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(true);
  const [cat1, setCat1] = useState({});
  const [cat2, setCat2] = useState({});

  const [roundNumber, setRoundNumber] = useState(0);

  console.log("1", cat1.health);
  console.log("2", cat2.health);

  useEffect(() => {
    const cat0 = generateCat();
    const cat1 = generateCat();
    setCat1(cat0);
    setCat2(cat1);
    setLoading(false);
  }, [winner]);

  const generateCat = () => {
    const name = "wow";
    const maxHealth = Math.ceil(Math.random() * 100);
    const health = Math.ceil(Math.random() * 100);
    const damage = Math.ceil(Math.random() * 10);
    const image = `https://cataas.com/cat/gif?${maxHealth}`;
    return { name, damage, maxHealth, health, image };
  };

  const attack = (id) => {
    if (id == 0) {
      const updatedCat = {
        ...cat1,
        health: cat1.health - cat2.damage,
      };
      setCat1(updatedCat);
    } else {
      const updatedCat = {
        ...cat2,
        health: cat2.health - cat1.damage,
      };
      setCat2(updatedCat);
    }
    setRoundNumber(roundNumber + 1);
  };

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <p>Round: {roundNumber}</p>
          <div className="arena-grid">
            <CatCard
              key2={0}
              name={cat1.name}
              health={cat1.health}
              damage={cat1.damage}
              image={cat1.image}
              attackFunc={attack}
            />
            <CatCard
              key2={1}
              name={cat2.name}
              health={cat2.health}
              damage={cat2.damage}
              image={cat2.image}
              attackFunc={attack}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Arena;
