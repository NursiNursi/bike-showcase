import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  leftIcon?: string;
  isDisabled?: boolean;
}

export interface SearchBikeModelProps {
  bikeModel: string;
  setBikeModel: (bikeModel: string) => void;
}

export interface MachineProps {
  engineType?: string;
  fuelSupplySystem?: string;
  // displacement?: string;
  boreAndStroke?: string;
  compressionRatio?: string;
  transmissionType?: string;
  maximumPower?: string;
  maximumTorque?: string;
  starterType?: string;
  clutchType?: string;
  lubricantType?: string;
}

export interface ChassisProps {
  frameType?: string;
  frontSuspensionType?: string;
  rearSuspensionType?: string;
  frontTireSize?: string;
  rearTireSize?: string;
  frontBrake?: string;
  rearBrake?: string;
  brakingSystem?: string;
}

export interface DimensionProps {
  lengthWidthHeight?: string;
  seatHeight?: string;
  wheelbase?: string;
  groundClearance?: string;
  curbWeight?: string;
}

export interface Capacities {
  fuelTankCapacity?: string;
  oilCapacity?: string;
  uBoxCapacity?: string;
}

export interface Electrical {
  batteryType: string;
  ignitionSystem: string;
  sparkPlugType: string;
  chargerPower?: string;
}

export interface BikeProps {
  model?: string;
  machine?: MachineProps;
  chassis?: ChassisProps;
  dimension?: DimensionProps;
  capacities?: Capacities;
  electrical?: Electrical;
  keyless?: boolean;
  price?: number;
  image?: string;
  colorVariant?: string[];
}
