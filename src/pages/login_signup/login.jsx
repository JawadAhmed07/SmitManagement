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
import { useAuth } from "@/context/Auth.context";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../components/LoderComponents/loading";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();


  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log("Login attempt with:", obj);

    if (!obj.email || !obj.password) {
      setLoading(false);
      setError("Please fill in all fields.");
      console.log("Login error: Empty fields");
      return;
    }

    try {
      console.log("Sending login request to:", AppRoutes.login);
      const res = await axios.post(AppRoutes.login, obj);
      console.log("Login response:", res.data);

      Cookies.set("token", res?.data?.data?.token);
      setUser(res?.data?.data?.user);
      navigate("/dashboard") ;
    } catch (err) {
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
      setError("Invalid email or password.");
      setLoading(false);
    }
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const obj = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      password: e.target.new.value,
    };

    console.log("Signup attempt with:", obj);

    if (!obj.fullName || !obj.email || !obj.password) {
      setLoading(false);
      setError("Please fill in all fields.");
      console.log("Signup error: Empty fields");
      return;
    }

    try {
      console.log("Sending signup request to:", AppRoutes.register);
      const res = await axios.post(AppRoutes.register, obj);
      console.log("Signup response:", res.data);

      Cookies.set("token", res?.data?.data?.token);
      setUser(res?.data?.data?.user);
      setLoading(false);
      console.log("Signup successful, navigating to /admin");
      navigate("/dashboard");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Signup failed. Please try again.";
      console.error("Signup error:", errorMessage);
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="login flex justify-center my-24 p-2">
      {/* <a href="/select"> Select Role</a> */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-2">
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-40" disabled={isLoading}>
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
                <CardDescription>Create an account</CardDescription>
              </CardHeader>
              <form onSubmit={handleSignup}>
                <CardContent className="space-y-2">
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <div className="space-y-1">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">Password</Label>
                    <Input id="new" name="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-40" disabled={isLoading}>
                    {isLoading ? "Signing up..." : "Sign up"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
