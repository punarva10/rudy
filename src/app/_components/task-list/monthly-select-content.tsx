import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Dispatch, type SetStateAction } from "react";

type monthlySelectContentProps = {
  newRepeatValue: string | null;
  newCustomMonthDate: string | null;
  setNewRepeatValue: Dispatch<SetStateAction<string | null>>;
  setNewCustomMonthDate: Dispatch<SetStateAction<string | null>>;
};

export const MonthlySelectContent = ({
  newRepeatValue,
  newCustomMonthDate,
  setNewRepeatValue,
  setNewCustomMonthDate,
}: monthlySelectContentProps) => {
  return (
    <>
      <Select
        onValueChange={(value) => setNewRepeatValue(value)}
        value={newRepeatValue ?? undefined}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select repetition option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1st">1st of every month</SelectItem>
          <SelectItem value="last date">Last date of every month</SelectItem>
          <SelectItem value="first weekend">
            First weekend of the month
          </SelectItem>
          <SelectItem value="last weekend">
            Last weekend of the month
          </SelectItem>
          <SelectItem value="custom">Custom date</SelectItem>
        </SelectContent>
      </Select>

      {newRepeatValue === "custom" && (
        <div className="mt-4">
          <Select
            onValueChange={(value) => setNewCustomMonthDate(value)}
            value={newCustomMonthDate ?? undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select custom date of month" />
            </SelectTrigger>
            <SelectContent>
              {[
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
                "6th",
                "7th",
                "8th",
                "9th",
                "10th",
                "11th",
                "12th",
                "13th",
                "14th",
                "15th",
                "16th",
                "17th",
                "18th",
                "19th",
                "20th",
                "21st",
                "22nd",
                "23rd",
                "24th",
                "25th",
                "26th",
                "27th",
                "28th",
                "29th",
              ].map((day) => (
                <SelectItem key={day} value={day}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
};
