import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";
import Winner from "./Winner";
import "../styles/Arena.css";

const Arena = () => {
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(true);
  const [cat1, setCat1] = useState({});
  const [cat2, setCat2] = useState({});

  const [roundNumber, setRoundNumber] = useState(0);

  useEffect(() => {
    if (cat1.health < 0) {
      setWinner(cat2.name);
    } else if (cat2.health < 0) {
      setWinner(cat1.name);
    } else {
      return;
    }
  }, [cat1, cat2]);

  useEffect(() => {
    setTimeout(() => {
      const cat0 = generateCat("2nd");
      const cat1 = generateCat("3rd");
      setCat1(cat0);
      setCat2(cat1);
      setLoading(false);
    }, 2000);
  }, [winner]);

  const generateCat = (hehe) => {
    const name = `Sir pounce-a-lot the ${hehe}`;
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

  console.log(winner);
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="container">
          <p>Round: {roundNumber}</p>
          <p>Winner: {winner}</p>

          {winner ? (
            <Winner name={winner} />
          ) : (
            <div className="arena-grid">
              {[cat1, cat2].map((cat, i) => (
                <CatCard
                  key2={i}
                  name={cat.name}
                  health={cat.health}
                  damage={cat.damage}
                  image={cat.image}
                  attackFunc={attack}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Arena;
