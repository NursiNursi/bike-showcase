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

export interface SpecProps {
  engineType?: string;
  displacement?: string;
  maxPower: string;
  maxTorque: string;
  ratedPower?: string;
  brakingSystem?: string;
  frontBrake?: string;
  rearBrake?: string;
}

export interface BikeProps {
  model?: string;
  spec?: SpecProps;
  keyless?: boolean;
  price?: number;
  image?: string;
  colorVariant?: string[];
}
