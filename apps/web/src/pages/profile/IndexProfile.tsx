import React from "react";
import { ProfileCards } from "../../components/layout/ProfileCards";
import { Button } from "../../components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosInstance } from "../../lib/axios";

export function ProfileHome() {
  const handleClick = async () => {
    try {
      const data = await axiosInstance.post("/recipes/1");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex gap-4 w-full justify-center">
      <ProfileCards />
      <Button onClick={handleClick}>FETCH</Button>
    </div>
  );
}
