import React, { useContext, createContext, useState, useEffect } from "react";
import { userProps, idProps } from "../models/user";
import { useCookies } from "react-cookie";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

type UserContextProviderProps = {
  children: React.ReactNode;
};
export interface UserContextConstruct {
  profile: userProps | undefined | null;
  setProfile: any;
  idToken: string | undefined | null;
  setIdToken: any;
  accessToken: string | undefined | null;
  setAccessToken: any;
}

export const UserContext = React.createContext({} as UserContextConstruct);

// สร้าง context ของ user profile เนื่องจากว่าใช้ Typesctipts จึ่งต้อง Decare ค่าที่จะใช้อยู่ใน context ด้วย

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [profile, setProfile] = useState<userProps>();
  const [idToken, setIdToken] = useState<string | null | undefined>();
  const [accessToken, setAccessToken] = useState<string | null | undefined>();
  const [cookies, setCookie] = useCookies(["accessToken"]);

  async function getLineProfile() {
    const liff = (await import("@line/liff")).default;
    await liff
      .init({
        liffId: String(liffId),
        withLoginOnExternalBrowser: true,
      })
      .then(() => {
        liff
          .getProfile()
          .then((profile) => {
            // console.log(profile);
            setProfile({
              ...profile,
              userId: profile.userId,
              displayName: profile.displayName,
              pictureUrl: profile.pictureUrl,
              statusMessage: profile.statusMessage,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }
  async function getIdToken() {
    const liff = (await import("@line/liff")).default;
    await liff
      .init({
        liffId: String(liffId),
        withLoginOnExternalBrowser: true,
      })
      .then(() => {
        const IDToken = liff.getIDToken();

        setIdToken(IDToken);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  async function getAccessToken() {
    const liff = (await import("@line/liff")).default;
    await liff
      .init({
        liffId: String(liffId),
        withLoginOnExternalBrowser: true,
      })
      .then(() => {
        const AccessToken = liff.getAccessToken;

        setAccessToken(AccessToken);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getLineProfile();
    getIdToken();
    getAccessToken();
  }, []);
  setCookie("accessToken", accessToken, {
    path: "/",
    maxAge: 3600 * 12, // Expires after 12hr
    sameSite: true,
  });

  return (
    <UserContext.Provider
      value={{
        profile,
        setProfile,
        idToken,
        setIdToken,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
