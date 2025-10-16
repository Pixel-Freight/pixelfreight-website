"use client";

import { useEffect } from "react";

export function LittleStoriesChromeController() {
  useEffect(() => {
    const body = document.body;
    body.classList.add("sample-littlestories");

    return () => {
      body.classList.remove("sample-littlestories");
    };
  }, []);

  return null;
}
