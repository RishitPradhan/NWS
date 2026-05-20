"use client";

import React from 'react';
import { useInteractions } from '@/hooks/useInteractions';

export default function InteractiveProvider({ children }: { children: React.ReactNode }) {
  useInteractions();
  return <>{children}</>;
}
