import style from "./Formulario.module.scss";

const Formulario = () => {
  return (
  
  <form className={style.form}>
      <div className={style.divPrincipal}>
        <div className={style.divForm}>
          <div className={style.divCampos}>
            <h1 className={style.h1}>Vamos começar!</h1>
            <input type="text" placeholder="Insira os nomes dos participantes" className={style.inputParticipante} />
            <button type="button" disabled={true} className={style.botao}>Adicionar</button>
            <div className={style.nomesParticipantes}>
    
            </div>
            <div className={style.divComecar}>
              <button type="button" disabled={true} className={style.botaoIniciar}>Iniciar Brincadeira</button>

            </div>

          </div>

        </div>

      </div>
    </form>
  )
}

export default Formulario;