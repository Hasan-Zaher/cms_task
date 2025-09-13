"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

interface SearchFormValues {
  query: string;
}

export function SearchBar() {
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Formik setup
  const formik = useFormik<SearchFormValues>({
    initialValues: {
      query: "",
    },
    validationSchema: Yup.object({
      query: Yup.string().required(
        t("searchRequired") || "Search query is required"
      ),
    }),
    onSubmit: (values) => {
      // Navigate to search results page
      router.push(`/search?q=${encodeURIComponent(values.query)}`);
      formik.resetForm();
      setIsSearchOpen(false);
    },
  });

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="text-white hover:bg-brown"
      >
        <Search className="w-14 h-14" />
      </Button>

      {isSearchOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white p-4 rounded-lg shadow-lg z-50 min-w-[300px]">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full px-4 py-2 rounded-lg bg-white text-brown placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-amber-500"
                dir={isRTL ? "rtl" : "ltr"}
                {...formik.getFieldProps("query")}
              />
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="absolute top-1/2 right-1 transform -translate-y-1/2"
              >
                <Search className="w-5 h-5 text-brown" />
              </Button>
            </div>
            {formik.touched.query && formik.errors.query && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.query}
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
