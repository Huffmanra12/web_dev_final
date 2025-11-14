import { Card } from "flowbite-react";
import { useAuth } from "../../hooks/useAuth";

export function MerchantProfile() {
  const { user } = useAuth();

  return (
    <div>
      <Card className="w-96 text-center">
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Account Type: {user.account_type}</p>
      </Card>
    </div>
  );
}
