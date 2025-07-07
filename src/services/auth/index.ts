import { IRegister } from "@/features/auth/register/types";
import api from "@/lib/axios";

const Register = async ({ username, email, password }: IRegister) => {
  const data = { username: username, email: email, password: password };

  const response = await api.post("/auth/register", data);
  return response;
};

const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = { email: email, password: password };

  const response = await api.post("/auth/login", data);
  return response;
};

export { Register, Login };
