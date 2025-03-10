import { Suspense } from "react";
import { Typography } from "@mui/material";
import FilterAndSortSection from "@/components/filterAndSortSection/FilterAndSortSection";

const HomePage = async () => {
  const getVehicleModels = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/models`, {
      cache: "no-store",
    });
  
    if (!res.ok) throw new Error("Failed to fetch models");
    return res.json();
  };

  const modelsResponse = await getVehicleModels();

  return (
    <div className="mx-4 mt-11 sm:mx-32 sm:mt-14">
      <Typography variant="h3" className="mb-11 sm:mb-14">
        Descubrí todos los modelos
      </Typography>

    <Suspense fallback={<p>Cargando modelos...</p>}>
      <FilterAndSortSection modelList={modelsResponse} />
      
    </Suspense>
    </div>
  );
};

export default HomePage;
