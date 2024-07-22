import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "./ui/separator";

export default function DailyTransactionsTable() {
  const mockData = [
    {
      id: 1,
      date: "24/10/2024",
      timeCreated: "9:50",
      amount: 60,
    },
    {
      id: 2,
      date: "24/10/2024",
      timeCreated: "9:51",
      amount: 30,
    },
    {
      id: 3,
      date: "24/10/2024",
      timeCreated: "9:52",
      amount: 20,
    },
    {
      id: 3,
      date: "24/10/2024",
      timeCreated: "9:52",
      amount: 20,
    },
  ];

  return (
    <div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">{transaction.timeCreated}</div>
              </TableCell>
              <TableCell className="text-right">
                ${transaction.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
    </div>
  );
}
