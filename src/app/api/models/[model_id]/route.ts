import { NextResponse } from "next/server";

interface GetDetailsProps { params: Promise<{ model_id: string }> }
export async function GET(req: Request, props: GetDetailsProps) {
  const params = await props.params;
  const { model_id } = params;

  try {
    const res = await fetch(`${process.env.EGO_API}/models/${model_id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Model not found" }, { status: 404 });
    }

    const modelData = await res.json();
    return NextResponse.json(modelData);
  } catch (error) {
    console.error("Error fetching model:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
