import {
  Card,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useLocation } from "react-router-dom";

export function EditItem() {
  const { state: item } = useLocation();
  const handleSubmit = async (e) => {
    console.log(item);
  };
  if (!item)
    return (
      <Card>
        <div>No Item Passed</div>
      </Card>
    );
  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <Card className="w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 px-8">
            <div>
              <div className="mb-2">
                <Label>Item Name</Label>
              </div>
              <TextInput
                className="w-80"
                id="ItemName"
                type="text"
                placeholder="Type Item Name"
                value={item.item_name}
                onChange={(e) => setItemName(e.target.value)} //all on changes will update the value of the defined variable at the top to be loaded into the fetch that performs the post
                required
              />
            </div>
            <div>
              <div className="mb-2">
                <Label>Item Description</Label>
              </div>
              <Textarea
                id="ItemDesc"
                placeholder="Type Description"
                rows={5}
                maxLength={500}
                value={item.item_description}
                onChange={(e) => setItemDesc(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="mb-2">
                <Label>Price</Label>
              </div>
              <TextInput
                className="w-20"
                id="Price"
                type="number"
                placeholder="0"
                min="0"
                step="0.01"
                value={item.item_price}
                onChange={(e) => setItemPrice(e.target.value)}
                required
              />
              <div>
                <Label>Item Stock</Label>
              </div>
              <div>
                <TextInput
                  className="w-20"
                  id="Stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  step="1"
                  value={item.inventory_count}
                  onChange={(e) => setItemStock(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit">Update Item</Button>
          </form>
        </Card>
      </div>
    </>
  );
}
