//hooks
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import * as yup from "yup";

//components 
import Button from "../../components/Global/Button";
import Form from "../../components/Global/Form";
import InputBase from "../../components/Global/InputBase";
import InputBaseEmail from "../../components/Global/InputBaseEmail";
import InputPhone from "../../components/Global/InputNumber";
import InputPass from "../../components/Global/InputPass";
import InputPassCheck from "../../components/Global/InputPassCheck";
import RadioBox from "../../components/Global/Radio";
import RadioGroups from "../../components/Global/RadioGroup";
import DisparoLogo from "../../components/LeftSideDesktop/DisparoLogo";
import LeftFigure from "../../components/LeftSideDesktop/LeftFigure";
import { StyledMain } from "../../styles/CadastroStyles/styles";
import { useRouter } from "next/router";
import LinearIndeterminate from "../../components/UI/LinearMUI";
import Head from "next/head";


export default function Register({check}) {

	const { enqueueSnackbar } = useSnackbar();
	
	const router = useRouter()

	const schema = yup.object().shape({
		name: yup
			.string()
			.required("Digite seu nome completo!")
			.max(18, "Digite seu nome com menos que 18 letras!")
			.matches(
				/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
				"Seu nome deve conter apenas letras"
			),
		email: yup
			.string()
			.required("Digite seu Email!")
			.email("Email não é válido"),
		pass: yup
			.string()
			.required("Digite sua Senha!")
			.min(6, "Senha deve ter 6 caracteres ou mais."),
		passCheck: yup
			.string()
			.required("Confirme sua senha!")
			.min(6, "Senha deve ter 6 caracteres ou mais.")
			.oneOf([yup.ref("pass")], "As senhas não são iguais!"),
		agreed: yup.boolean().isTrue("Você deve Aceitar os Termos!").required("Você deve aceitar os termos para continuar."),
		notify: yup.boolean().required("Escolha se deseja receber ofertas, novidades, conteúdos informativos e publicitários:"),
		num: yup.string().required("Digite seu Número").min(12, "Deve ter no mínimo 12 caracteres."),

	});

	
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	



	const submit = (data) => {

			localStorage.setItem("@Disparo_userSubmit", JSON.stringify(data))

			enqueueSnackbar(`Cadastro Realizado! Faça seu login para continuar.`, {
				variant: "success",
				autoHideDuration: 3000,
			});

			setTimeout(() => {
				router.push("/login");
			}, 2000);
		
	}

	if (!check) {
		return <LinearIndeterminate/>
	}

	return (
		<>
		<Head>
		<title>Disparo PRO | Cadastro</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
		<StyledMain>
			<section className="figure__container">
				<DisparoLogo className="figure__logo" />
				<LeftFigure className="figure__illustration" />
			</section>

			<DisparoLogo className="mobile__logo" />

			<section className="form__container">

				<Form onSubmit={handleSubmit(submit)}>
					<div className="form__innerBox">
						<h2>Cadastre-se</h2>
						<div className="login__info">

							<InputBase
								label="Nome"
								register={register}
								info="name"
								className={errors.name?.message ? "error" : undefined}
								errorMsg={errors.name?.message && errors.name.message}
							/>

							<InputBaseEmail
								label="E-mail"
								register={register}
								info="email"
								className={errors.email?.message ? "error" : undefined}
								errorMsg={errors.email?.message && errors.email.message}
							/>

							<InputPhone
								label="Número"
								setValue={setValue}
								className={errors.num?.message ? "error" : undefined}
								errorMsg={errors.num?.message && errors.num.message}
							/>

							<InputPass
								label="Senha"
								register={register}
								info="pass"
								className={errors.pass?.message ? "error" : undefined}
								errorMsg={errors.pass?.message && errors.pass.message}
							/>

							<InputPassCheck
								label="Repetir Senha"
								register={register}
								info="passCheck"
								className={errors.passCheck?.message ? "error" : undefined}
								errorMsg={errors.passCheck?.message && errors.passCheck.message}
							/>

							<RadioBox
								setValue={setValue}
								errorMsg={errors.agreed?.message && errors.agreed.message}
								className={errors.agreed?.message ? 'error' : undefined}
							/>

							<div className="register__notify">
								<span className={errors.notify?.message ? "error" : undefined}>
									{errors.notify?.message  
										? errors.notify.message
										: "Quero receber ofertas, novidades, conteúdos informativos e publicitários da Disparo Pro"}
								</span>
								<RadioGroups setValue={setValue} />
							</div>

							<Button width={"70%"} type="submit">
								Cadastrar
							</Button>

						</div>

						<div className="form__toRegister">
							<p>Ja é cliente Disparo Pro ?</p>
							<Link href="/login">Fazer Login</Link>
						</div>

					</div>
				</Form>
			</section>
		</StyledMain>
		</>
	);
}


export async function getStaticProps (context) {  								   
	return {
		 props: {
			check: true
		}
	}
}

