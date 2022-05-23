import Radio from "@mui/material/Radio";
import { StyledDiv } from "./styles";

export default function RadioBox({ className, errorMsg, setValue }) {

	return (
		<StyledDiv>

			<Radio
				onChange={() => {
					setValue('agreed', true)
				}}
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
