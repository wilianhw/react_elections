import { useEffect, useState } from "react";
import { apiGetAllCandidates, apiGetAllCities } from "./api/api";
import Header from "./components/Header";
import { CenterLoading } from "./components/Loading";
import Main from "./components/Main";
import Select from "./components/Select";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        (async function getAllCitiesAndCandidates() {
            const [backendCities, backendCandidates] = await Promise.all([
                apiGetAllCities(),
                apiGetAllCandidates(),
            ]);

            setCities(backendCities);
            setCandidates(backendCandidates);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        })();
    }, []);

    let mainJs = <CenterLoading />;

    if (!isLoading) {
        mainJs = (
            <>
                <Select cities={cities} />
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
