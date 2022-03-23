import React from "react";
import { Routes } from "./routes";
import { StoreProvider } from "./store/StoreProvider";

export const Root = () => {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
};
