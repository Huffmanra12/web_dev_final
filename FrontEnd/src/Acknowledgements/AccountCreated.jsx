import { Card, Button, Modal, ModalBody } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export function AccountCreated() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <Modal show={true} size="md" popup>
          <ModalBody>
            <div className="space-y-6 text-center">
              <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                Account created successfully
              </h3>
              <div className="w-full flex justify-center">
                <Button onClick={() => navigate("/login")}>
                  Return to login
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Card>
    </div>
  );
}
