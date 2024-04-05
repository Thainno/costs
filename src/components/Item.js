import Proptypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Item.propTtypes = {
  marca: Proptypes.string.isRequired,
  ano_lancamento: Proptypes.number.isRequired,
};

Item.defaultProps = {
  marca: "Faltou a marca",
  ano_lancamento: 0,
};

export default Item;
