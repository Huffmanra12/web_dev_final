import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MerchantSidebar from "./MerchantSideBar";
import MerchantItems from "./Merchant_items";

export function MerchantHome() {
  const [currentPage, setCurrentPage] = useState("My-Items");

  return (
    <div className="flex">
      <aside>
        <MerchantSidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </aside>

      <main className="flex-1 p-4">
        <Routes>
          <Route index element={<MerchantItems />} />
          <Route path="my-items" element={<MerchantItems />} />
        </Routes>
      </main>
    </div>
  );
}
