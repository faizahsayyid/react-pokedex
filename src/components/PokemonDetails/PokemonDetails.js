import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PokemonDetails = () => {
  let { pokemon } = useParams();
  const { pokemonData, pokemonType, loading } = usePokemonDetails(pokemon);

  return (
    <>
      {loading ? (
        <div className="pd-loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="PokemonDetails" style={{ marginTop: 100 }}>
          {pokemonData.map((data) => {
            return (
              <div className="container">
                <img src={data.sprites["front_default"]} alt="sprite" />
                <div className="divTable">
                  <div className="divTableBody">
                    <div className="divTableRow">
                      <div className="divTableCell">Type</div>
                      <div className="divTableCell">{pokemonType}</div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Height</div>
                      <div className="divTableCell">
                        {" "}
                        {Math.round(data.height * 3.9)}"
                      </div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Weight</div>
                      <div className="divTableCell">
                        {" "}
                        {Math.round(data.weight / 4.3)} lbs
                      </div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Number of Battles</div>
                      <div className="divTableCell">
                        {data.game_indices.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
