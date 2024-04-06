import Button from "./eventos/Button";

function Evento() {
  function primeiroEvento() {
    console.log("Primeiro evento ativado!");
  }

  function segundoEvento() {
    console.log("Segundo evento ativado!");
  }

  return (
    <>
      <p>Clique aqui para disparar um evento</p>
      <Button event={primeiroEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </>
  );
}

export default Evento;
