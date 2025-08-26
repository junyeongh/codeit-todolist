"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateTask(itemId: string, formData: FormData) {
  const name = formData.get("name") as string;
  const memo = formData.get("memo") as string;

  const API_SERVER_URL = `${process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;
  try {
    const response = await fetch(`${API_SERVER_URL}/items/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, memo }),
    });
    if (!response.ok) {
      throw Error(`Error: ${response.status} ${response.statusText}`);
    }

    revalidateTag("task-items");
    redirect("/");
  } catch (err) {
    console.error(err);
    // const errorMessage = err instanceof Error ? err.message : String(err);
    // return {
    //   success: false,
    //   error: `[Failed] ${errorMessage}`,
    // };
  }
}
