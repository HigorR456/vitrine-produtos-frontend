"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { logout } from '@/lib/api/auth/logout';
import { Heart, LogOut, ShoppingBag, UserPen } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'

export const UserProfile = ({ email }) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logging out...');
      router.push("/account/user")
    } catch (error) {
      toast.error('Failed to logout. Please try again later.');
    }
  }

  return (
    <Card className="lg:col-span-1 h-fit">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} disabled className="bg-gray-100" />
        </div>
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
            <UserPen className="h-4 w-4 mr-2" />
            Edit profile
          </Button>
          <Button variant="outline" className="w-full bg-transparent cursor-pointer">
            <Heart className="h-4 w-4 mr-2" />
            My favorites
          </Button>
          <Button variant="outline" className="w-full bg-transparent cursor-pointer">
            <ShoppingBag className="h-4 w-4 mr-2" />
            My purchases
          </Button>
        </div>
        <Button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 cursor-pointer">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};
