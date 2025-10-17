export function renderBrakingSystemLabel(brakingSystem: string | undefined) {
  if (!brakingSystem) return "Disc";

  const hasCBS =
    brakingSystem.includes("CBS") ||
    brakingSystem.includes("Combi Brake System");
  const hasABS = brakingSystem.includes("ABS");

  if (hasCBS && hasABS) {
    return "C/ABS";
  } else if (hasCBS) {
    return "CBS";
  } else if (hasABS) {
    return "ABS";
  } else {
    return null;
  }
}

// Slug helpers and bike lookup
import type { BikeProps } from "@/types";
import { allBikes, sportBike, cubBike, evBike } from "@/constants";

export function slugifyModel(model: string | undefined): string {
  if (!model) return "";
  return model
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/:/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export function getAllBikes(): BikeProps[] {
  return [...allBikes, ...sportBike, ...cubBike, ...evBike];
}

export function getAllBikeSlugs(): string[] {
  return getAllBikes()
    .map((b) => slugifyModel(b.model))
    .filter((s) => !!s) as string[];
}

export function findBikeBySlug(slug: string): BikeProps | undefined {
  return getAllBikes().find((b) => slugifyModel(b.model) === slug);
}
