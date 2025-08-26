const API_SERVER_URL = `${process.env.NEXT_PUBLIC_TODOLIST_API_SERVER_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;

export const handleCompletionToggle = async (
  id: number,
  isCompleted: boolean,
) => {
  const response = await fetch(`${API_SERVER_URL}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isCompleted: !isCompleted,
    }),
  });
  if (!response.ok) {
    throw Error(`Error: ${response.statusText}`);
  }
};

export const handleUpdateImageUrl = async (id: number, imageUrl: string) => {
  const response = await fetch(`${API_SERVER_URL}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
    }),
  });
  if (!response.ok) {
    throw Error(`Error: ${response.statusText}`);
  }
};

export const handleDeleteMemo = async (id: number) => {
  const response = await fetch(`${API_SERVER_URL}/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw Error(`Error: ${response.statusText}`);
  }
};
