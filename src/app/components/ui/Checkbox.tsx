"use client";
import React from "react";

type Props = {
  checked?: boolean;
  onChange?: (v: boolean) => void;
  label: string;
  id?: string;
};

export default function Checkbox({ checked, onChange, label, id }: Props) {
  const inputId = id || `chk-${label.replace(/\s+/g, "")}`;
  return (
    <label
      htmlFor={inputId}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-4 w-4 accent-[var(--brand-purple)]"
      />
      <span className="text-sm text-ink-700">{label}</span>
    </label>
  );
}