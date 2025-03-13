import "../styles/Trends.css";
import useTrends from "../utils/hook/useTrends.js";

const Trends = () => {
    const {trends} = useTrends();

    return (
        <div className="trends">
            <p>Tendances</p>
            <ul>
                {trends.map((trend, index) => (
                    <li key={index}>{index + 1}. # {trend.toUpperCase()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Trends;
