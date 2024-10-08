import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Dispatch, type SetStateAction } from "react";

type WeeklySelectContentProps = {
  newRepeatValue: string | null;
  setNewRepeatValue: Dispatch<SetStateAction<string | null>>;
};

export const WeeklySelectContent = ({
  newRepeatValue,
  setNewRepeatValue,
}: WeeklySelectContentProps) => {
  return (
    <Select
      onValueChange={(value) => setNewRepeatValue(value)}
      value={newRepeatValue ?? undefined}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select day of week" />
      </SelectTrigger>
      <SelectContent>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <SelectItem key={day} value={day}>
            {day}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
