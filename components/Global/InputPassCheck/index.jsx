import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import { StyledDiv } from "./styles";

export default function InputPassCheck({
	label,
	register,
	info,
	className,
	errorMsg,
}) {

	const [values, setValues] = useState({
		password: "",
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

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
						{...register(info)}
						error={className ? true : false}
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						sx={{ height: "40px" }}
						onChange={handleChange("password")}
						endAdornment={

							<InputAdornment position="end">

								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									sx={{ color: "var(--blue1)" }}
								>

									{values.showPassword ? <VisibilityOff /> : <Visibility />}

								</IconButton>

							</InputAdornment>
						}
					/>

				</FormControl>

			</Box>
      
		</StyledDiv>
	);
}
