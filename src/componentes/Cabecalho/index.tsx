import style from './Cabecalho.module.scss';


const Cabecalho = () => {
  return (
    <header className={style.cabecalho}>
      <div role="img" aria-label='Logo do Sorteador' className={style.imagem_logo}></div>
      <img src="/imagens/participante.png" alt="Participante com presente na mão" className={style.participante}/>
    </header>
  )
}

export default Cabecalho;