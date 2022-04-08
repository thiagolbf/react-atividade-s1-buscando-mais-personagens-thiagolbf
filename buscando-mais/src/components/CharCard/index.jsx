import "./style.css";

function CharCard({ status, name, imagem }) {
  return (
    <>
      {status === "Alive" ? (
        <div class="alive">
          <p>{name}</p>
          <figure>
            <img src={imagem} alt="" />
            <figcaption></figcaption>
          </figure>
        </div>
      ) : (
        <div class="morto">
          <p>{name}</p>
          <figure>
            <img src={imagem} alt="" />
            <figcaption></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

export default CharCard;
