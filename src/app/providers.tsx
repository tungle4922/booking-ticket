"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useRef } from "react";
import { AppStore, makeStore } from "@/lib/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      <AntdRegistry>
        <NextUIProvider>{children}</NextUIProvider>
      </AntdRegistry>
    </Provider>
  );
}
