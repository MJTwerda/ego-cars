import { notFound } from "next/navigation";

interface ModelSheetPageProps {
  searchParams?: Promise<{ id?: string }>
}

const ModelSheetPage = async (props: ModelSheetPageProps) => {
  const searchParams = await props.searchParams;
  if (!searchParams || !searchParams?.id) return notFound();

  const getVehicleModelById = async (modelId: string) => {
    
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

  const modelDetails = await getVehicleModelById(searchParams?.id);
  if (!modelDetails) return notFound();

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