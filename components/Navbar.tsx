"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const handleClick = () => {
    window.open("https://wa.me/628112340753", "_blank");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "catalogue", label: "Catalogue" },
    { id: "credit-simulation", label: "Credit Simulation" },
    { id: "client-review", label: "Client Review" },
    { id: "articles", label: "Article" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLinks = () => (
    <ul
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
      role="list"
    >
      {sections.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-sm md:text-base transition-colors ${
                isActive
                  ? "text-primary-red font-semibold"
                  : "text-gray-700 hover:text-primary-red"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4"
        aria-label="Primary"
      >
        <Link href="" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Honda Logo"
            width={178}
            height={178}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <CustomButton
          title="Kontak"
          btnType="button"
          containerStyles="min-w-[130px]"
          variant="secondary"
          handleClick={handleClick}
        />
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200 shadow-sm"
        >
          <div className="max-w-[1440px] mx-auto sm:px-16 px-6 py-3">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
