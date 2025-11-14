import { Routes, Route } from "react-router-dom";
import MerchantSidebar from "./MerchantSideBar";
import MerchantItems from "./Merchant_items";
import { MerchantProfile } from "./merchant_profile";

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
        </Routes>
      </main>
    </div>
  );
}
