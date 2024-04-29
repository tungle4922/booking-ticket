"use client";

import SelectDate from "@/modules/Booking/pages/select-date";
import { Suspense } from "react";

export default function SelectDatePage() {
  return (
    <Suspense>
      <SelectDate />
    </Suspense>
  );
}
