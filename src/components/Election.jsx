import Candidates from "./Candidates";

export default function Election({ city = {}, candidates = [] }) {
    function sortCandidates() {
        return candidates.sort((a, b) =>
            a.votes < b.votes ? 1 : a.votes > b.votes ? -1 : 0
        );
    }

    const sortedCandidates = sortCandidates();

    return (
        <div className="flex flex-col items-center justify-center m-4">
            <h1>Eleição em {city.name}</h1>

            <div className="flex flex-row items-center justify-around w-full m-4">
                <div>
                    <strong>Total de eleitores: </strong>
                    <span>{city.votingPopulation}</span>
                </div>
                <div>
                    <strong>Abstenção: </strong>
                    <span>{city.absence}</span>
                </div>
                <div>
                    <strong>Comparecimento: </strong>
                    <span>{city.presence}</span>
                </div>
            </div>

            <h2 className="mb-6">{candidates.length} candidatos</h2>

            <Candidates
                candidates={sortedCandidates}
                validVotes={city.presence}
            />
        </div>
    );
}
