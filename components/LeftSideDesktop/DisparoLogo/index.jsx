import Image from "next/image";
import logo from "../../../assets/logo.svg";
import { StyledDiv } from "./styles";

export default function DisparoLogo({ className }) {
	return (
	<StyledDiv className={className}>
		<Image
			src={logo}
			alt="DisparoPRO"
			className={className}
			layout='intrinsic'
		/>
	</StyledDiv> )
}
