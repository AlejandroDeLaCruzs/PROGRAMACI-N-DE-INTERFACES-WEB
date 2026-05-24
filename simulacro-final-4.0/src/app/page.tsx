"use client";
import { useEffect, useState } from "react";
import { EpisdesFavorites } from "./components/EpisodesFavoritos";
import "./style.css";
import { useProvieder } from "./context/contex";
import { api } from "@/lib/api/api";

const Home = () => {
  const { ids, deleteFavorite } = useProvieder();
  const [episodes, setEpisode] = useState<episode[]>([]);

  const fetchData = async () => {
    try {
      const episodes = await Promise.all<episode>(
        ids.map(async (id) => {
          const response = await api.get(`/episode/${id}`);
          return response.data;
        }),
      );
      setEpisode(episodes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ids]);

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="modalPAge">
      <button onClick={() => setShowModal(true)}>show Favorites</button>
      {showModal && (
        <EpisdesFavorites setShowModal={setShowModal}>
          {episodes &&
            episodes.map((episode) => (
              <button onClick={(e) => deleteFavorite(episode.id)} key={episode.id}>
                {episode.name}
              </button>
            ))}
        </EpisdesFavorites>
      )}
    </div>
  );
};

export default Home;
