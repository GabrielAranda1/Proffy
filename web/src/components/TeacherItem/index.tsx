import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/37005564?s=460&u=589857045fb1401ff2557669102ac13e2316d9c2&v=4"
          alt="Gabriel Aranda"
        />
        <div>
          <strong>Gabriel Aranda</strong>
          <span>Redação</span>
        </div>
      </header>

      <p>
        Dinheiro a nossa tropa tem, Humildade é lixo mas sem render pra ninguém
        <br /> <br />
        Eu vou guardar meus cash pra multiplicar meus bens, Porque minha maior
        meta é deixar minha família bem Pode crer
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$169,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Zap kkkkkkkkk" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
