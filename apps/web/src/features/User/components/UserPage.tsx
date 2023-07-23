import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserLayout } from "@/features/User/components/UserLayout";
import { useNavigate } from "react-router-dom";

export function UserPage() {
  const navigate = useNavigate();
  return (
    <UserLayout>
      <Card>
        <CardHeader>
          <CardTitle>Edit my Profile</CardTitle>
        </CardHeader>
        <CardContent>Here you can edit your profile</CardContent>
        <CardFooter>
          <Button onClick={() => navigate("/user/edit-profile")}>Go</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>See my recipes.</CardTitle>
        </CardHeader>
        <CardContent>List of created recipes by you.</CardContent>
        <CardFooter>
          <Button onClick={() => navigate("/user/edit-profile")}>Go</Button>
        </CardFooter>
      </Card>
    </UserLayout>
  );
}
