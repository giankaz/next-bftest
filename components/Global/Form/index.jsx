import React from "react";
import { StyledForm } from "./styles";

export default function Form({ children, ...rest }) {
	return <StyledForm {...rest}>{children}</StyledForm>;
}
