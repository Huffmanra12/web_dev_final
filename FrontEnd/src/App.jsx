import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Forms/Login";
import { CreateAccount } from "./Forms/CreateAccount";
import { AccountCreated } from "./Acknowledgements/AccountCreated";
import { UserHome } from "./user_components/user_home";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "../hooks/useAuth";
import { MerchantHome } from "./MerchantComponents/merchant_home";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          user ? (
            user.account_type === "merchant" ? (
              <Navigate to="/merchant-home/*" replace />
            ) : (
              <Navigate to="/user-home/*" replace />
            )
          ) : (
            <Login />
          )
        }
      />

      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/account-created" element={<AccountCreated />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/user-home/*" element={<UserHome />} />
        <Route path="/merchant-home/*" element={<MerchantHome />} />
      </Route>
    </Routes>
  );
}

export default App;
