import { PropsWithChildren } from "react";
import styled from "./Title.module.css";

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className={styled.title}>
    {children}
  </h1>
)
