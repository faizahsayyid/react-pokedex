import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PokemonImage from "../PokemonImage/PokemonImage";

const PokemonDetails = () => {
  let { pokemon } = useParams();
  const { pokemonData, loading, error } = usePokemonDetails(pokemon);

  return (
    <>
      {loading ? (
        <div className="pd-loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container">
          <PokemonImage
            loading={loading}
            error={error}
            pokemonDetails={pokemonData}
            pokemonOnDisplay={pokemon}
          />
          <div className="folders">
            <details>
              <summary>Moves</summary>
              <div className="details-text">
                {pokemonData.moves.map(
                  ({ move, version_group_details }, index) => {
                    return (
                      <div className="inside-folder" key={index}>
                        <div>{move.name}</div>
                        <div>
                          [Level {version_group_details[0].level_learned_at}]
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </details>
            <details>
              <summary>Abilities</summary>
              <div className="details-text">
                {pokemonData.abilities.map(({ ability, is_hidden }, index) => {
                  return (
                    <div className="inside-folder" key={index}>
                      <div>{ability.name}</div>
                      {is_hidden && <div>[HIDDEN]</div>}
                    </div>
                  );
                })}
              </div>
            </details>
            <details>
              <summary>Stats</summary>
              <div className="details-text">
                {pokemonData.stats.map(({ base_stat, stat }, index) => {
                  return (
                    <div className="inside-folder" key={index}>
                      <div>{stat.name}</div>
                      <div>{base_stat}</div>
                    </div>
                  );
                })}
              </div>
            </details>
            {/* <details>
              <summary>Forms</summary>
              <div className="details-text">
                {pokemonData.forms.map(({ name }, index) => (
                  <Link key={index} to={`/${name}`} className="form">
                    {name}
                  </Link>
                ))}
              </div>
            </details> */}
          </div>
        </div>

        //   <div className="divTable">
        //     <div className="divTableBody">
        //       <div className="divTableRow">
        //         <div className="divTableCell">Type</div>
        //         <div className="divTableCell">{pokemonType}</div>
        //       </div>
        //       <div className="divTableRow">
        //         <div className="divTableCell">Height</div>
        //         <div className="divTableCell">
        //           {" "}
        //           {Math.round(data.height * 3.9)}"
        //         </div>
        //       </div>
        //       <div className="divTableRow">
        //         <div className="divTableCell">Weight</div>
        //         <div className="divTableCell">
        //           {" "}
        //           {Math.round(data.weight / 4.3)} lbs
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default PokemonDetails;
