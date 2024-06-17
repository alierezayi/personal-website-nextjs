import { useState } from "react";
import Cookies from "js-cookie";
import { ProjectCategoryType } from "@/lib/types";

const useCookie = (
  key: string,
  initialValue: ProjectCategoryType
): [
  ProjectCategoryType,
  (value: ProjectCategoryType, options?: Cookies.CookieAttributes) => void,
  (options?: Cookies.CookieAttributes) => void
] => {
  const getCookie = () => {
    const cookie = Cookies.get(key);
    if (cookie) {
      return cookie as ProjectCategoryType;
    } else if (initialValue) {
      Cookies.set(key, initialValue);
      return initialValue;
    }
    return "all";
  };

  const [cookie, setCookieState] = useState<ProjectCategoryType>(getCookie);

  const updateCookie = (value: ProjectCategoryType, options = {}) => {
    Cookies.set(key, value, options);
    setCookieState(value);
  };

  const deleteCookie = (options = {}) => {
    Cookies.remove(key, options);
    setCookieState("all");
  };

  return [cookie, updateCookie, deleteCookie];
};

export default useCookie;
