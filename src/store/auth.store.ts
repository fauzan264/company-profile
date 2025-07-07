import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type TAuth = {
  username: string;
  email: string;
  userId: string;
};

export interface IAuthStoreStateProps {
  auth: TAuth;
  setAuth: ({ username, email, userId }: TAuth) => void;
  logout: () => void;
}

export const authStore = create<IAuthStoreStateProps>()(
  persist(
    (set) => ({
      auth: {
        username: "",
        email: "",
        userId: "",
      },
      setAuth: ({ username, email, userId }: TAuth) =>
        set(() => ({
          auth: { username: username, email: email, userId: userId },
        })),
      logout: () => {
        set({
          auth: { username: "", email: "", userId: "" },
        });
        localStorage.removeItem("auth-session");
      },
    }),
    {
      name: "auth-session",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ auth: { userId: state?.auth?.userId } }),
    }
  )
);
