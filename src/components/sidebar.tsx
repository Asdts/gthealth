"use client";
import { Button } from "@/components/ui/button";
import { LogOut , BarChart3 , Home , Activity , User , Settings} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Sidebar() {
    const router = useRouter();
    const handleLogout = async () => {
        const res = await fetch("/api/auth/user/logout");
        const data = await res.json();
        if (res.ok) {
            localStorage.removeItem("token");
            router.push("/login");
        }
        if (!res.ok) {
            throw Error(data.error || "Failed to logout");
        }
    }
    return (
        <>
       <div className="hidden w-64 flex-col border-r bg-gray-50 p-4 md:flex">
              {/* <div className="flex h-12 items-center px-2 font-bold">
                <Link href="/">FitnessTracker</Link>
              </div> */}
              <nav className="mt-8 flex flex-col gap-2">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/dashboard/fitness">
                    <Activity className="mr-2 h-4 w-4" />
                    Fitness Data
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/dashboard/analytics">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analytics
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </nav>
              <div className="mt-auto">
                <Button variant="ghost" className="justify-start w-full" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
      
    </>
  );
}