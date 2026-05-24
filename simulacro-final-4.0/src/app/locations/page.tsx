"use client";

import { api } from "@/lib/api/api";
import { useEffect, useState } from "react";
import { LocationCard } from "../components/LocationCard";
import { Paginacion } from "../components/Paginacion";
import "./sytle.css";

export const LocationsPage = () => {
  const [locations, setLocations] = useState<location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<info>();
  const [page, setPage] = useState<number>(1);

  const fetchLocations = () => {
    try {
      api
        .get(`/location/?page=${page}`)
        .then((res) => {
          setInfo(res.data.info);
          setLocations(res.data.results);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [page]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="locationPageConteiner">
      <div className="locationPage">
        {locations &&
          locations.map((location) => (
            <LocationCard location={location} key={location.id} />
          ))}
      </div>

      {info && <Paginacion actualPage={page} setPage={setPage} info={info} />}
    </div>
  );
};

export default LocationsPage;
