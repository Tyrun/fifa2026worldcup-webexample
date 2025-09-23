"use client";
import React from "react";

/** Simple range slider (decorative for now). */
export default function Range({
  min = 0,
  max = 100,
  value,
  onChange,
}: {
  min?: number;
  max?: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-[var(--brand-purple)]"
    />
  );
}