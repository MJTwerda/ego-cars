import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(`${process.env.EGO_API}/models`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch models");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching vehicle models" },
      { status: 500 }
    );
  }
}
