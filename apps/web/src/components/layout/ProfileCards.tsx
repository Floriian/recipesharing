import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { profileCardRoutes } from "../../utils/ProfileCardRoutes";
import { To, useNavigate } from "react-router-dom";

export function ProfileCards() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path as To);
  };
  return (
    <>
      {profileCardRoutes.map((route, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{route.title}</CardTitle>
            <CardContent>
              <p>{route.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleClick(route.path)}>
                {route.buttonTitle}
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
