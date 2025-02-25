import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center p-4">
      <Image
        src="/lost-man.jpg"
        alt="Página no encontrada"
        width={400}
        height={400}
        className="mb-6"
      />
      <h1 className="text-3xl font-semibold">¡Oops! Debés elegir un modelo para visualizar esta página 🚘</h1>
      <p className="text-gray-600 mt-2">Elegí un modelo de vehículo para ver su detalle, sino el vehículo sos vos</p>
      <Button
        variant="outlined"
        color="secondary"
        className="mt-6"
        component={Link}
        href="/"
      >
        Ver Lista de Modelos
      </Button>
    </div>
  );
}
