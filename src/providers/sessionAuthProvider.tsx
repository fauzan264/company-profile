"use client";
import { GetDetailUser } from "@/services/users";
import { authStore } from "@/store/auth.store";
import { ReactNode, useEffect } from "react";

interface ISessionAuthProviderProps {
  children: ReactNode;
}

export default function SessionAuthProvider({
  children,
}: ISessionAuthProviderProps) {
  const { auth, setAuth } = authStore();
  const onSessionLoginUser = async () => {
    try {
      const response = await GetDetailUser(auth.userId);
      setAuth({
        email: response?.data?.data?.email,
        username: response?.data?.data?.username,
        userId: response?.data?.data?.objectId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth.userId) {
      onSessionLoginUser();
    }
  }, [auth.userId]);

  return <>{children}</>;
}
