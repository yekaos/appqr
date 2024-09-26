import React from "react"
import Seo from "../components/seo"
import Halt2 from "../components/header/halt2"
import Footer from "../components/footer/Footer"
import "../components/login-registro/accesoregistro.css"
import LoginForm from "../components/login-registro/login"
import RegisterForm from "../components/login-registro/registro"
import BtnUp from "../components/buttons/BtnUp"
import BtnBack from "../components/buttons/BtnBack"


const login = async (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token" })
    }, 500)
  })
}

const register = async (name, email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token" })
    }, 500)
  })
}

const Auth = () => {
  return (
    <>
      <Halt2 />
      <div className="auth-container">
        <LoginForm login={login} />
        <RegisterForm register={register} />
      </div>
      <BtnUp></BtnUp>
      <BtnBack></BtnBack>
      <Footer />
    </>
  )
}

export const Head = () => <Seo title="Inicio sesión/Registro" />
export default Auth
