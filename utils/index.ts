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
