function Evento() {
  function meuEvento() {
    console.log("Opa, fui ativado!");
  }

  return (
    <>
      <p>Clique aqui para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  );
}

export default Evento;
