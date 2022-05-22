import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { StyledDiv } from "./styles";

export default function InputBaseEmail({
	label,
	register,
	info,
	className,
	errorMsg,
}) {
	return (
		<StyledDiv>
			<label htmlFor="pass" className={className}>
				{label}
				{errorMsg && ` - ${errorMsg}`}
			</label>

			<Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
				<FormControl
					sx={{ m: 1, width: "100%", height: "40px" }}
					variant="outlined"
				>
					<OutlinedInput
						error={className ? true : false}
						{...register(info)}
						sx={{ height: "40px" }}
					/>
				</FormControl>
			</Box>
			
		</StyledDiv>
	);
}
