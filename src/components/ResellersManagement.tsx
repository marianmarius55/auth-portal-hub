import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { UserPlus, Ban, Shield } from "lucide-react";

interface Reseller {
  id: string;
  name: string;
  email: string;
  keysGenerated: number;
  status: 'active' | 'banned';
  createdAt: string;
}

export const ResellersManagement = () => {
  const [newResellerEmail, setNewResellerEmail] = useState('');

  const handleAddReseller = () => {
    // Mock function - replace with actual API call
    toast.success('Reseller added successfully');
    setNewResellerEmail('');
  };

  const handleBanReseller = (resellerId: string) => {
    // Mock function - replace with actual API call
    toast.success('Reseller banned successfully');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Reseller</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Reseller email"
              value={newResellerEmail}
              onChange={(e) => setNewResellerEmail(e.target.value)}
              className="max-w-md"
            />
            <Button onClick={handleAddReseller}>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Reseller
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resellers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Keys Generated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock data - replace with actual data */}
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>150</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-500">Active</span>
                </TableCell>
                <TableCell>2024-03-20</TableCell>
                <TableCell>
                  <Button variant="destructive" size="icon" onClick={() => handleBanReseller('mock-id')}>
                    <Ban className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};