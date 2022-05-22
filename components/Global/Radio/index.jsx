import Radio from "@mui/material/Radio";
import { StyledDiv } from "./styles";

export default function RadioBox({ setAgreed, className, errorMsg }) {

	const handleChange = (event) => {
		setAgreed(true);
	};

	return (
		<StyledDiv>

			<Radio
				onChange={handleChange}
				size="small"
				sx={{
					"& .MuiSvgIcon-root": {
						color: "var(--blue2)",
					},
				}}
			/>

			<span className={className ? "error" : "span__read"}>
				{errorMsg
					? errorMsg
					: "Eu li e aceito a política de prividade da Disparo Pro"}
			</span>
      
		</StyledDiv>
	);
}
