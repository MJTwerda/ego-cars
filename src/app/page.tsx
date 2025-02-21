import { Suspense } from "react";
import ModelList from "@/components/models/modelList";
import { VehicleModelI } from "@/components/models/models.interfaces";
import { Typography } from "@mui/material";

const HomePage = async () => {
  const getVehicleModels = async (): Promise<VehicleModelI[]> => {
      const res = await fetch(
        `${process.env.EGO_API}/models`, 
        {
          cache: "no-store",
        }
      );
  
    if (!res.ok) throw new Error("Failed to fetch models");
    return res.json();
  };

  const modelsResponse = await getVehicleModels();

  return (
    <div className="mx-4 mt-11 sm:mx-32 sm:mt-16">
      <Typography variant="h3" gutterBottom>
        Descubrí todos los modelos
      </Typography>

    <Suspense fallback={<p>Cargando modelos...</p>}>
      <ModelList modelsData={modelsResponse} />
    </Suspense>
    </div>
  );
};

export default HomePage;
