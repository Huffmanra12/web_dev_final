//Component that renders the side bar of the application for user navigation
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  Button,
} from "flowbite-react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
//the setCurrentPage() function changes currentPage telling the application what to render.
function MerchantSidebar({ currentPage, setCurrentPage }) {
  const { signOut } = useAuth();
  const Navigate = useNavigate();
  return (
    <Sidebar aria-label="Default sidebar example" className="w-64 h-screen">
      <SidebarItems>
        <p>Huffmans Store</p>
        <SidebarItemGroup>
          <SidebarItem onClick={() => Navigate("/merchant-home/my-profile")}>
            My Profile
          </SidebarItem>
          <SidebarItem onClick={() => Navigate("/merchant-home/my-items")}>
            My Items
          </SidebarItem>
          <SidebarItem onClick={() => setCurrentPage("AddItems")}>
            Add Items
          </SidebarItem>
          <SidebarItem onClick={() => setCurrentPage("Metrics")}>
            Metrics
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem onClick={() => signOut()}>
            <Button>Sign out</Button>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
//exports the sidebar to be used in the appliation.
export default MerchantSidebar;
