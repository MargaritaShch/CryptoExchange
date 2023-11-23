import React,{useState, useEffect} from "react";
import './Table.css'
import TableRow from "./components/TableRow/TableRow";

const LABELS = []

function Table(){
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coincap.io/v2/assets');
                if (!response.ok) {
                    throw new Error('response was not ok');
                }
                const responseData = await response.json();
                const data = responseData.data.slice(0, 7); // Получаем первые 7 монет
                setCryptoData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [])

    return(
    <div>
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        <th className="item">Runk</th>
                        <th className="item2">Name</th>
                        <th className="item">Price</th>
                        <th className="item">Market Cap</th>
                        <th className="item">Volume (24Hr)</th>
                        <th className="item">Change(24Hr)</th>
                    </tr>
                </thead>
                   
                <tbody>
                {cryptoData.map(crypto => <TableRow key={crypto.id} crypto={crypto}/>)}
                </tbody>
            </table>
            </div>

            <div>
            <button className="view-more">Viwe More</button>
            </div>
            
        </div>
    )
}

export default Table;