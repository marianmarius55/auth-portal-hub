import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { KeyDuration, LicenseKey } from "@/types/keys";
import { Ban, Eye, KeyRound, RotateCw } from "lucide-react";

interface KeyManagementProps {
  userRole: 'admin' | 'reseller' | 'user';
}

export const KeyManagement = ({ userRole }: KeyManagementProps) => {
  const [selectedDuration, setSelectedDuration] = useState<KeyDuration>('1day');
  const [quantity, setQuantity] = useState(1);
  const [selectedKey, setSelectedKey] = useState<LicenseKey | null>(null);

  const handleGenerateKeys = () => {
    // Mock function - replace with actual API call
    toast.success(`Generated ${quantity} keys with ${selectedDuration} duration`);
  };

  const handleBanKey = (keyId: string) => {
    // Mock function - replace with actual API call
    toast.success('Key banned successfully');
  };

  const handleResetHWID = (keyId: string) => {
    // Mock function - replace with actual API call
    toast.success('HWID reset successfully');
  };

  return (
    <div className="space-y-6">
      {/* Key Generation Section */}
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Generate License Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-auto">
              <Select value={selectedDuration} onValueChange={(value) => setSelectedDuration(value as KeyDuration)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1hour">1 Hour</SelectItem>
                  <SelectItem value="1day">1 Day</SelectItem>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="2weeks">2 Weeks</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="lifetime">Lifetime</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-auto">
              <Input
                type="number"
                min="1"
                max="1000"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                placeholder="Quantity"
                className="w-[150px]"
              />
            </div>
            <Button onClick={handleGenerateKeys}>
              <KeyRound className="mr-2 h-4 w-4" />
              Generate Keys
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Keys Table */}
      <Card>
        <CardHeader>
          <CardTitle>License Keys</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock data - replace with actual data */}
              <TableRow>
                <TableCell className="font-mono">XXXX-XXXX-XXXX-XXXX</TableCell>
                <TableCell>1 Month</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-500">Active</span>
                </TableCell>
                <TableCell>2024-03-20</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Key Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold">HWID</h4>
                            <p className="font-mono text-sm">ABC123DEF456</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">IP Address</h4>
                            <p className="font-mono text-sm">192.168.1.1</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Location</h4>
                            <p>New York, United States</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Last Used</h4>
                            <p>2024-03-20 15:30:00</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {(userRole === 'admin' || userRole === 'reseller') && (
                      <>
                        <Button variant="outline" size="icon" onClick={() => handleResetHWID('mock-id')}>
                          <RotateCw className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleBanKey('mock-id')}>
                          <Ban className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};