import { ButtonHTMLAttributes } from "react";
import "./light.css";

interface LightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: 0 | 1;
}

export const Light = ({ state, ...props }: LightProps) => {
  return (
    <button className={`light ${state === 0 ? "off" : "on"}`} {...props}>
      <span>{state === 0 ? "OFF" : "ON"}</span>
    </button>
  );
};
