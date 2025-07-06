import api from "@/lib/axios";

const GetUsers = async () => {
  const response = await api.get(`/users`);
  return response;
}

const GetDetailUser = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response;
}


export {
  GetUsers,
  GetDetailUser
}