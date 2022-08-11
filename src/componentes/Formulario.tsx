import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro";
import style from "./Formulario.module.scss";

const Formulario = () => {

  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()


  }
  return (
  
    <form className={style.form} onSubmit={ evento => adicionarParticipante}>
      <div className={style.divPrincipal}>
        <div className={style.divForm}>
          <div className={style.divCampos}>
            <h1 className={style.h1}>Vamos começar!</h1>
            <input 
              ref={inputRef}
              value={nome}
              onChange={evento => setNome(evento.target.value)}
              type="text" 
              placeholder="Insira os nomes dos participantes" 
              className={style.inputParticipante} 
            />
            <button type="button" disabled={!nome} className={style.botao}>Adicionar</button>
            {mensagemDeErro ?? <p role="alert">{mensagemDeErro}</p>}
            <div className={style.nomesParticipantes}>
    
            </div>
            <div className={style.divComecar}>
              {/* <button type="button" disabled={true} className={style.botaoIniciar}>Iniciar Brincadeira</button> */}

            </div>

          </div>

        </div>

      </div>
    </form>
  )
}

export default Formulario;