"use client";

import { VehicleModelI } from "../interfaces/models.interfaces";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export interface ModelListProps {
  vehicleData: VehicleModelI;
}

const ModelCard = ({ vehicleData }: ModelListProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/model-sheet?id=${vehicleData.id}`);
  }
  return (
    <Link href={`/model-sheet?id=${vehicleData.id}`} className="group hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold group-hover:text-[--color-active] min-h-[56px] text-center">
            {vehicleData.name}
          </h1>

          <div className="flex space-x-2 text-gray-600">
            <p>{vehicleData.year}</p>
            <p>|</p>
            <p>$ {vehicleData.price.toLocaleString("es-AR")}</p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-[200px]">
          <Image
            src={vehicleData.photo}
            alt={vehicleData.name}
            width={300}
            height={200}
            className="rounded object-contain"
          />
        </div>

        <Button
          onClick={handleNavigate}
          className="bg-black text-white px-4 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Ver Modelo
        </Button>
      </div>
    </Link>
  );
};

export default ModelCard;
