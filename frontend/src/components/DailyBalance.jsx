import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DailyBalance() {
  const dailyBalance = 50;
  const date = new Date();
  const dateToday = date.toDateString();
  return (
    <div>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Remaining:</CardDescription>
          <CardTitle className="text-4xl">${dailyBalance}</CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          {dateToday}
        </CardContent>
      </Card>
    </div>
  );
}
