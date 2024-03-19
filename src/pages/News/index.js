import React, { useState } from "react";
import NewsCard from "../../componantes/NewsCard/index";
import "./News.scss"
import assassin_img from "../../assets/Images/1271241.jpg";
import GreedFall_img from "../../assets/Images/927108.jpg";
import Ark_img from "../../assets/Images/632759.jpg";

function News() {
  const [data] = useState([
    {
      id: 1,
      img: assassin_img,
      name: "assassin's creed mirage",
      descrption:
        "In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice.Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined.",
      date: "18 January, 2025",
      genre: "Adventures, Action, Stealth",
    },

    {
      id: 2,
      img: GreedFall_img,
      name: "Greed fall",
      descrption:
        "Engage in a core roleplaying experience, and forge the destiny of a new world seeping with magic, and filled with riches, lost secrets, and fantastic creatures. With diplomacy, deception and force, become part of a living, evolving world - influence its course and shape your story.",
      date: "10 September, 2024",
      genre: "Adventures, Action, Stealth",
    },

    {
      id: 3,
      img: Ark_img,
      name: "Ark survival 2",
      descrption:
        "Survive the past. Tame the future. Suddenly awakened on a primal world filled with dinosaurs and humans struggling for dominance, you must team-up with legendary heroes to confront powerful dark forces. Saddle up, and join the definitive next-gen survival experience with ARK 2!",
      date: "25 June, 2026",
      genre: "Adventures, Action, Stealth",
    },
  ]);
  return (
    <div className="News">
      <h2>Latest news</h2>
      <div className="container">
        <div className="News-Cards d-flex justify-content-between flex-wrap align-items-center">
          {data.map((ele) => (
            <NewsCard
              key={ele.id}
              Img={ele.img}
              name={ele.name}
              descrption={ele.descrption}
              date={ele.date}
              genre={ele.genre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
