//component that renders the add item form and submits it to the backend.
import {
  Card,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
import { NewItem } from "../../api/items_api/addNewItem";
import { useAuth } from "../../hooks/useAuth";

function AddItem({ updateItems }) {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [price, setItemPrice] = useState("");
  const [stock, setItemStock] = useState("");
  const { user } = useAuth();
  const itemOwner = user.id;

  //when submit is clicked on the form this runs peforming a POST and submitting the data to the backend to be added to the database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = NewItem(itemName, itemDesc, price, stock, itemOwner);
    setItemName("");
    setItemDesc("");
    setItemPrice("");
  };
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
                value={itemName}
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
                value={itemDesc}
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
                value={price}
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
                  value={stock}
                  onChange={(e) => setItemStock(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </>
  );
}
//esports AddItem to be used in the application
export default AddItem;
