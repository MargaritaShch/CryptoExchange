import React,{useState, useEffect} from "react";
import styles from './Table.module.css'
import TableRow from "./components/TableRow/TableRow";

const Name = "Name";
const Price = "Price";
const MarketCap = "MarketCap";
const VWAP = 'VWAP(24Hr)'
const Supply = 'Supply'
const Volume = "Volume(24Hr)";
const Change = "Change(24Hr)";

function Table(){
    const LABELS = [Name,Price,MarketCap,VWAP,Supply,Volume,Change]
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
        <div className={styles.containerTable}>
            <table className={styles.table}>
                <thead>
                    {LABELS.map((lebel,index)=>(
                        <th className={styles.item} key ={index}>{lebel}</th>
                    ))}
                </thead>
                   
                <tbody>
                {cryptoData.map(crypto => <TableRow key={crypto.id} crypto={crypto}/>)}
                </tbody>
            </table>
            </div>

            <div>
            <button className={styles.viewMore}>Viwe More</button>
            </div>
            
        </div>
    )
}

export default Table;