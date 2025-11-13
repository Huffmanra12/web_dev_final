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
import { useAuth } from "../../hooks/useAuth";

export function Login({ currentPage, setCurrentPage, userInfo, setUserInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const { signIn, loading } = useAuth();

  const onLogin = async () => {
    try {
      signIn(email, password);
      setEmail("");
      setPass("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Card>
        <Modal show={true} size="md" popup>
          <ModalBody>
            <div className="space-y-6">
              <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Username</Label>
                </div>
                <TextInput
                  id="email"
                  placeholder="Username"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  onChange={(event) => setPass(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button onClick={() => onLogin()}>Log in</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                  href="#"
                  className="text-primary-700 hover:underline dark:text-primary-500"
                  onClick={() => navigate("/create-account")}
                >
                  Create account
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Card>
    </div>
  );
}
