"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setLocale } from "@/store/slices/languageSlice";

export function LanguageToggle() {
  const locale = useAppSelector((state) => state.language.locale);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white   focus:outline-none"
      >
         {locale.toUpperCase()}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Menu  bg-amber-900*/}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="  ">
            <button
              onClick={() => {
                dispatch(setLocale("en"));
                setOpen(false);
              }}
              className="flex w-full items-center px-4 py-2  rounded-t-md   text-sm text-white hover:bg-amber-800"
            >
              <span className="mr-2">🇺🇸</span> English
            </button>
            <button
              onClick={() => {
                dispatch(setLocale("ar"));
                setOpen(false);
              }}
              className="flex w-full items-center px-4 py-2 text-sm  rounded-b-md   text-white hover:bg-amber-800"
            >
              <span className="mr-2">🇸🇦</span> العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
