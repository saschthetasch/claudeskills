"use client";

import { Search, X } from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: "default" | "large";
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search skills...",
  className,
  size = "default",
}: SearchBarProps) {
  const handleClear = useCallback(() => {
    onChange("");
  }, [onChange]);

  return (
    <div className={cn("relative", className)}>
      <Search
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
          size === "large" ? "h-5 w-5" : "h-4 w-4"
        )}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all",
          size === "large" ? "pl-11 pr-10 py-3 text-base" : "pl-9 pr-9 py-2 text-sm"
        )}
      />
      {value && (
        <button
          onClick={handleClear}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
            size === "large" ? "h-5 w-5" : "h-4 w-4"
          )}
        >
          <X className="h-full w-full" />
        </button>
      )}
    </div>
  );
}
