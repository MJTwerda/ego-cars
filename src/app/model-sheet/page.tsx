import { notFound } from "next/navigation";

const ModelSheetPage = async ({ searchParams }: { searchParams: { id: string } }) => {

  const getVehicleModelById = async (modelId: string) => {
    if (!searchParams.id) return notFound();
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/models/${modelId}`, {
        cache: "default",
      });
  
      if (!res.ok) return notFound();
  
      return await res.json();
    } catch (error) {
      console.error("Error fetching model:", error);
      return null;
    }
  };

  const modelDetails = await getVehicleModelById(searchParams.id);

  return (
    <>
      <h1>Model Sheet</h1>
      <p>{modelDetails.title}</p>

      <p>{modelDetails.name}</p>

      <p>{modelDetails.description}</p>
    </>
  );
};

export default ModelSheetPage;