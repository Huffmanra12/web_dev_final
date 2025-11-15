import { Routes, Route } from "react-router-dom";
import MerchantSidebar from "./merchant_sidebar";
import MerchantItems from "./merchant_items";
import { MerchantProfile } from "./merchant_profile";
import AddItem from "./add_item";
import { EditItem } from "./edit_item";

export function MerchantHome() {
  return (
    <div className="flex min-h-screen w-screen">
      <aside className="w-64 min-h-screen">
        <MerchantSidebar />
      </aside>

      <main className="flex-1 min-h-screen flex justify-center items-center p-4">
        <Routes>
          <Route index element={<MerchantProfile />} />
          <Route path="my-profile" element={<MerchantProfile />} />
          <Route path="my-items" element={<MerchantItems />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="my-items/:itemID" element={<EditItem />} />
        </Routes>
      </main>
    </div>
  );
}
