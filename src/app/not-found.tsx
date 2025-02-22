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
      <h1 className="text-3xl font-semibold">¡Oops! Nos perdimos en el mapa 📍</h1>
      <p className="text-gray-600 mt-2">El destino que buscas no existe o se lo tragó la tierra.</p>
      <Button
        variant="outlined"
        color="primary"
        className="mt-6"
        component={Link}
        href="/"
      >
        Volver al inicio
      </Button>
    </div>
  );
}
