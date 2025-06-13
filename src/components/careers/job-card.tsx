import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  title: string;
  type: string;
  description: string;
  requirements: string;
  onApply?: () => void;
}

export function JobCard({
  title,
  type,
  description,
  requirements,
  onApply,
}: JobCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2">
              <Badge variant="secondary">{type}</Badge>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Requirements:</strong> {requirements}
        </p>
        <Button className="w-full" onClick={onApply}>
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}
