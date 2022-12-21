import { SyntheticEvent } from "react";

export interface IButton {
  buttonFunction?:(e: SyntheticEvent) => void;
  text: string;
}