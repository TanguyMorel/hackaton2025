import "../styles/Trends.css";

const Trends = () => {
    const trends = [
        "#ReactJS",
        "#Hackaton2025",
        "#JavaScript",
        "#OpenAI",
        "#DataScience"
    ];

    return (
        <div className="trends">
            <h2>Tendances</h2>
            <ul>
                {trends.map((trend, index) => (
                    <li key={index}>{trend}</li>
                ))}
            </ul>
        </div>
    );
};

export default Trends;
