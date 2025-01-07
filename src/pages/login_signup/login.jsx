import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { AppRoutes } from "../../Constant/constant";
import { AuthContext } from "../../context/Auth.context";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    axios
      .post(AppRoutes.login, obj)
      .then((res) => {
        setLoading(false);
        Cookies.set("token", res?.data?.data?.token);
        setUser(res?.data?.data?.user);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  //for signup
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    axios
      .post(AppRoutes.register, obj)
      .then((res) => {
        setLoading(false);
        console.log("Signup successful:", res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Signup error:", err);
      });
  };

  return (
    <div className="login">
      <a href="/select"> Select Role</a>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full  grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login in your acount</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" defaultValue="" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-40">
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create Account in our system.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSignup}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="FullName">FullName</Label>
                  <Input id="FullName" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-40">
                  {isLoading ? "Signing up..." : "Sign up"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
