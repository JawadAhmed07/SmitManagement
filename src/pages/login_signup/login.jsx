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
import { replace, useNavigate } from "react-router";
import LoadingSpinner from "../../components/LoderComponents/loading";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  
  //for login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const obj = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    if (!obj.email || !obj.password) {
      setLoading(false);
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(AppRoutes.login, obj);
      alert(`Welcome back ${res.data.user?.fullName || "User"}`);
      Cookies.set("token", res?.data?.data?.token);
      console.log(res.data);
      setUser(res?.data?.data?.user);
      navigate("/admin/teachers") ;
    } catch (err) {
      setError("Invalid email or password.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
    
    //for signup
      const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const obj = {
          fullName: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        };

        if (!obj.fullName || !obj.email || !obj.password) {
          setLoading(false);
          setError("Please fill in all fields.");
          return;
        }

        try {
          const res = await axios.post(AppRoutes.register, obj);
          navigate("/admin");
        } catch (err) {
          setError("Signup failed. Please try again.");
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

 
  return (
    <div className="login flex justify-center my-24 p-2">
      {/* <a href="/select"> Select Role</a> */}
      {isLoading ? <LoadingSpinner /> 
      :
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
                {error && <p className="text-red-500 text-sm">{error}</p>}
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
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="space-y-1">
                  <Label htmlFor="fullName">FullName</Label>
                  <Input id="fullName" type="text" />
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
      }
    </div>
  );
}
