export default function Candidates({ candidates = [], validVotes = 0 }) {
    return (
        <ul className="flex items-center justify-center flex-wrap">
            {candidates.map((candidate, index) => (
                <li key={candidate.id} className="flex flex-col items-center">
                    <div className="flex justify-center items-center">
                        <img
                            src={`./img/${candidate.username}.png`}
                            alt="candidate"
                            width="100px"
                            className="rounded-full"
                        />
                        <div className="ml-10 mr-5">
                            <h2
                                className={
                                    index === 0
                                        ? "text-green-500"
                                        : "text-yellow-800"
                                }
                            >
                                {((candidate.votes / validVotes) * 100).toFixed(
                                    2
                                )}
                            </h2>
                            <h2>{candidate.votes}</h2>
                        </div>
                    </div>
                    <div className="m-6">
                        <h1>{candidate.name}</h1>
                        {index === 0 ? (
                            <p className="text-green-700">Eleito</p>
                        ) : (
                            <p className="text-yellow-600">Não eleito</p>
                        )}
                        <p></p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
