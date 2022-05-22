import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function RadioGroups({ setNotify }) {
  
	return (
		<FormControl>

			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
			>

				<FormControlLabel
					value={true}
					control={
						<Radio
							size="small"
							onChange={() => setNotify(true)}
							sx={{
								"& .MuiSvgIcon-root": {
									color: "var(--blue2)",
								},
							}}
						/>
					}
					label="Sim"
				/>

				<FormControlLabel
					value={false}
					control={
						<Radio
							size="small"
							onChange={() => setNotify(false)}
							sx={{
								"& .MuiSvgIcon-root": {
									color: "var(--blue2)",
								},
							}}
						/>
					}
					label="Não"
				/>

			</RadioGroup>
      
		</FormControl>
	);
}
