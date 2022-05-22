import { StyledButton } from "./styles";

export default function Button({ children, type, width }) {
  
	return (
		<StyledButton width={width} type={type}>
			{children}
		</StyledButton>
	);
}
