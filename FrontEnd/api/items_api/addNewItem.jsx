export async function NewItem(itemName, itemDesc, price, stock, itemOwner) {
  console.log(itemName);
  const res = await fetch("http://192.168.1.239:8080/api/v1/items/addItem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      item_name: itemName,
      item_description: itemDesc,
      item_price: price,
      inventory_count: stock,
      item_owner: itemOwner,
    }),
  });
  return res.json();
}
