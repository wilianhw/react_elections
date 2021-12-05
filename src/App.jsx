import { useEffect, useState } from "react";
import {
    apiGetAllCandidates,
    apiGetAllCities,
    aptGetElectionByCityIdFrom,
} from "./api/api";
import Header from "./components/Header";
import { CenterLoading } from "./components/Loading";
import Main from "./components/Main";
import Select from "./components/Select";
import Election from "./components/Election";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [selectedCity, setSelectedCity] = useState({});
    const [currentElection, setCurrentElection] = useState({});

    useEffect(() => {
        (async function getAllCitiesAndCandidates() {
            const [backendCities, backendCandidates] = await Promise.all([
                apiGetAllCities(),
                apiGetAllCandidates(),
            ]);

            setCities(backendCities);
            setCandidates(backendCandidates);
            setSelectedCity(backendCities[0].id);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        })();
    }, []);

    useEffect(() => {
        (async function getCurrentElection() {
            const backendElection = await aptGetElectionByCityIdFrom(
                selectedCity
            );
            setCurrentElection(backendElection);
        })();
    }, [selectedCity]);

    function chooseCity(cityId) {
        setSelectedCity(cityId);
    }

    function findCityById(cityId) {
        return cities.find((city) => city.id === cityId);
    }

    function findCandidatesElection() {
        return candidates
            .filter((candidate) =>
                currentElection.find(
                    (election) => candidate.id === election.candidateId
                )
            )
            .map((candidate) => {
                const election = currentElection.find(
                    (election) => candidate.id === election.candidateId
                );
                return {
                    ...candidate,
                    votes: election.votes,
                };
            });
    }

    let mainJs = <CenterLoading />;

    if (!isLoading) {
        const electionCity = findCityById(selectedCity);
        const candidatesCity = findCandidatesElection(selectedCity);

        mainJs = (
            <>
                <Select
                    cities={cities}
                    value={selectedCity}
                    handleChangeCity={chooseCity}
                />
                <Election city={electionCity} candidates={candidatesCity} />
            </>
        );
    }

    return (
        <div className="max-w-5xl flex flex-col m-auto">
            <Header />

            <Main>{mainJs}</Main>
        </div>
    );
}
