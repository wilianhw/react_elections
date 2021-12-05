export default function Select({
    cities = [],
    value = "Cidade Selecionada",
    handleChangeCity = null,
}) {
    function handleSelectedCity(event) {
        if (handleChangeCity) {
            handleChangeCity(event.target.value);
        }
    }

    return (
        <div className="flex items-center justify-center mt-5">
            <select value={value} onChange={handleSelectedCity}>
                {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
