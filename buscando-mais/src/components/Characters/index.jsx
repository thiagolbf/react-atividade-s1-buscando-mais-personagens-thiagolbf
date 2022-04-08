import "./style.css";
import CharCard from "../CharCard";

function Characters({ list }) {
  return (
    <div>
      <h2>Meus Personagens</h2>

      {list.map((value, index) => {
        console.log("teste");

        return (
          <CharCard
            key={value.id}
            name={value.name}
            status={value.status}
            imagem={value.image}
          />
        );
      })}
    </div>
  );
}

export default Characters;
