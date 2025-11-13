import {
  Button,
  Label,
  Modal,
  ModalBody,
  TextInput,
  Card,
} from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createUser from "../../api/user_api/create_user";

export function CreateAccount() {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passCheck, setPassCheck] = useState(false);
  const [email, setEmail] = useState("");

  const onCreate = async () => {
    if (password === confirmPass) {
      await createUser(first_name, last_name, username, email, password).then(
        (data) => {
          setFirstName("");
          setLastName("");
          setUserName("");
          setPassword("");
          setConfirmPass("");
          setEmail("");
        }
      );
      navigate("/account-created");
    } else {
      setPassCheck(true);
    }
  };

  return (
    <div>
      <Card>
        <Modal show={true} size="md" popup>
          <ModalBody>
            <div className="space-y-6">
              <h3 className=" mt-4 text-xl font-medium text-gray-900 dark:text-white">
                Create Account
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="First Name">First Name</Label>
                </div>
                <TextInput
                  id="First Name"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Last Name">Last Name</Label>
                </div>
                <TextInput
                  id="Last Name"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Email</Label>
                </div>
                <TextInput
                  id="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username">Username</Label>
                </div>
                <TextInput
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUserName(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Password</Label>
                </div>
                <TextInput
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Confirm Pass">Confirm Password</Label>
                </div>
                <TextInput
                  id="Confirm Pass"
                  type="password"
                  value={confirmPass}
                  onChange={(event) => setConfirmPass(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button onClick={() => onCreate()}>Create Account</Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Card>
    </div>
  );
}
