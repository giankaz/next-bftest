import Image from "next/image";
import firstFigure from "../../../assets/figure1.svg";
import { StyledDiv } from "./styles";

export default function LeftFigure() {
	return (
		<StyledDiv>
			<Image src={firstFigure} alt="" width='500' height='500' />
		</StyledDiv>
	);
}
