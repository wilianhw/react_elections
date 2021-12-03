export default function Select({ cities = [] }) {
    return (
        <div className="flex items-center justify-center mt-5">
            <select>
                {cities.map((city) => (
                    <option key={city.id}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}
