import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const Invest = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Đầu tư</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-stretch gap-2">
          <Input placeholder="Nhập số tiền muốn đầu tư" />
          <Button>Đầu tư</Button>
        </div>
      </CardContent>
    </Card>
  );
};
