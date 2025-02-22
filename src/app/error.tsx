"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@mui/material";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error detectado:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center p-4">
      <Image
        src="/accident-car.jpg"
        alt="Error de GPS"
        width={400}
        height={400}
        className="mb-6"
      />
      <h1 className="text-2xl font-semibold">¡Ups! Parece que ¡Ups! Parece que hubo un error en el sistema o nos quedamos sin combustible. 🧭</h1>
      <p className="text-gray-600 mt-2">Por favor, vuelve a intentarlo en unos instantes.</p>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => reset()}
        className="mt-6"
      >
        Reintentar
      </Button>
    </div>
  );
}
