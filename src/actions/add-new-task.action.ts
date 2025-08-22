"use server"

import { revalidateTag } from "next/cache";

// biome-ignore lint/suspicious/noExplicitAny: ignore this
export async function addNewTaskAction(_: any, formData: FormData) {
  console.log("NEXT_PUBLIC_TODOLIST_API_SERVER_URL:", process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL);
  console.log("NEXT_PUBLIC_TENANT_ID:", process.env.NEXT_PUBLIC_TENANT_ID);
  const API_SERVER_URL = `${process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;

  const name = formData.get("name") as string;
  console.log(`${API_SERVER_URL}/items`, JSON.stringify({ name }));

  try {
    const response = await fetch(`${API_SERVER_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name })
    })
    if (!response.ok) {
      throw Error(`Error: ${response.status} ${response.statusText}`);
    }
    revalidateTag("task-items"); // task-detailed-items
    return {
      success: true,
    }
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: `[Failed] ${err.message}`
    }
  }
}