"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChangeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={
        theme === "dark" ? () => setTheme("light") : () => setTheme("dark")
      }
    >
      <span className="flex items-center">
        {theme === "light" ? (
          <>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="24" height="24" fill="white"></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z"
                  fill="#323232"
                ></path>
              </g>
            </svg>
            Dark Mode
          </>
        ) : (
          <>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Light Mode
          </>
        )}
      </span>
    </button>
  );
};

export default ThemeChangeButton;
