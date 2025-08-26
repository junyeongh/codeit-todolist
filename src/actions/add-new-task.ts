"use server";

import { revalidateTag } from "next/cache";

// biome-ignore lint/suspicious/noExplicitAny: ignore this
export async function addNewTask(_: any, formData: FormData) {
  const name = formData.get("name") as string;

  const API_SERVER_URL = `${process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;
  try {
    const response = await fetch(`${API_SERVER_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) {
      throw Error(`Error: ${response.statusText}`);
    }
    revalidateTag("task-items");
    return {
      success: true,
    };
  } catch (err) {
    console.error(err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: `[Failed] ${errorMessage}`,
    };
  }
}
