import { Card } from "flowbite-react";

export function UserHome({ userInfo }) {
  return (
    <div>
      <Card> {userInfo.email}</Card>
    </div>
  );
}
