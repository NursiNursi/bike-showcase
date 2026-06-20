"use client";

import { useEffect } from "react";
import { Hero } from "@/components";
import Catalogue from "@/components/Catalogue";
import Profile from "@/components/Profile";
import CreditSimulation from "@/components/CreditSimulation";
import ClientReview from "@/components/ClientReview";
import Article from "@/components/Article";

const scrollToHash = (hash: string) => {
  const sectionId = decodeURIComponent(hash.replace("#", ""));
  if (!sectionId) return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Home() {
  useEffect(() => {
    let timeoutId: number | undefined;
    let animationFrameId: number | undefined;

    const syncHashScroll = () => {
      const { hash } = window.location;
      if (!hash) return;

      animationFrameId = window.requestAnimationFrame(() => {
        scrollToHash(hash);
      });

      // Retry once more after hydration/layout settles.
      timeoutId = window.setTimeout(() => {
        scrollToHash(hash);
      }, 250);
    };

    syncHashScroll();
    window.addEventListener("hashchange", syncHashScroll);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      window.removeEventListener("hashchange", syncHashScroll);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Profile />
      <section id="catalogue" className="scroll-mt-24" aria-label="Catalogue">
        <Catalogue />
      </section>
      <section
        id="credit-simulation"
        className="scroll-mt-24"
        aria-label="Credit Simulation"
      >
        <CreditSimulation />
      </section>
      <section
        id="client-review"
        className="scroll-mt-24"
        aria-label="Client Review"
      >
        <ClientReview />
      </section>
      <section id="articles" className="scroll-mt-24" aria-label="Articles">
        <Article />
      </section>
    </main>
  );
}

