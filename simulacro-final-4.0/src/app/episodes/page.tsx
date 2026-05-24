"use client";

import { api } from "@/lib/api/api";
import { useEffect, useState } from "react";
import "./style.css";
import { EpiosdeCard } from "../components/EpiosdeCard";
import { Paginacion } from "../components/Paginacion";

const EpiosdesPage = () => {
  const [episodes, setEpisodes] = useState<episode[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<info>();
  const [page, setPage] = useState<number>(1);

  const fetchEpiosdes = () => {
    try {
      api
        .get(`/episode/?page=${page}`)
        .then((res) => {
          setEpisodes(res.data.results);
          setInfo(res.data.info);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpiosdes();
  }, [page]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="episedesOutconteiner">
      <div className="episodesConteiner">
        {episodes &&
          episodes.map((episode) => (
            <EpiosdeCard episode={episode} key={episode.id} />
          ))}
      </div>
      {info && <Paginacion info={info} setPage={setPage} actualPage={page} />}
    </div>
  );
};

export default EpiosdesPage;
