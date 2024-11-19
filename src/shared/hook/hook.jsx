import { useState } from "react";
import Cookies from "js-cookie";

export function useChange(a = "") {
  const [value, setValue] = useState(a);
  function handle(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return {
    value,
    set: (v) => setValue(v),
    onChange: handle,
  };
}

export function setCookie(
  type = "create",
  { cookieName = "", cookieValue = "", end = "" }
) {
  if (!!!type) throw console.error("useCookie type setting plz");
  switch (type) {
    case "create":
      if (!!!cookieName || !!!cookieValue || !!!end)
        throw console.error("useCookie empty Error");
      Cookies.set(cookieName, JSON.stringify(cookieValue), { expires: end });
      break;
    case "get":
      if (!!!cookieName) throw console.error("useCookie empty Error");
      if (!!Cookies.get(cookieName)) return JSON.parse(Cookies.get(cookieName));
      return "";
  }
}
