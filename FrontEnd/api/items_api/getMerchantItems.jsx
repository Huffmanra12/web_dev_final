export async function GetMerchantItems(id) {
  const res = await fetch(
    `http://192.168.1.239:8080/api/v1/items/merchantItems/${id}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to retrieve items");
  }

  return res.json();
}
