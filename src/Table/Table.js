import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoins } from "../redux/actions";
import styles from './Table.module.css'
import TableRow from "./components/TableRow/TableRow";


const Runk = "Runk"
const Name = "Name";
const Price = "Price";
const MarketCap = "MarketCap";
const VWAP = 'VWAP(24Hr)'
const Supply = 'Supply'
const Volume = "Volume(24Hr)";
const Change = "Change(24Hr)";


function Table(){
    const LABELS = [Runk,Name,Price,MarketCap,VWAP,Supply,Volume,Change]
    const dispatch = useDispatch();
    const cryptoData = useSelector((state)=>state.reducerCoins.cryptoData);
    const loadedCoins = useSelector((state) => state.reducerCoins.loadedCoins);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets?offset=${loadedCoins}&limit=10`);
                if (!response.ok) {
                    throw new Error('response was not ok');
                }
                const responseData = await response.json();
                const data = responseData.data
                dispatch(addCoins(data))
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (loadedCoins === 0) {
            fetchData(); // Загружаем первые 10 монет при монтировании компонента
        };
    }, [dispatch, loadedCoins])


    const handleViweMore = async ()=>{
        try{
            const response = await fetch(`https://api.coincap.io/v2/assets?offset=${loadedCoins}&limit=10`);
            if (!response.ok) {
                throw new Error('response was not ok');    
        } 
        const responseData = await response.json();
                const data = responseData.data.slice(0, 10); 
                dispatch(addCoins(data))
        }catch(error){ 
            console.error("Error fetching data:", error);
        }
    }

    return(
        <div>
        <div className={styles.containerTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                {LABELS.map((label, index) => (
                  <th className={styles.item} key={index}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
    
            <tbody>
              {cryptoData.map((crypto) => (
                <TableRow key={crypto.id} crypto={crypto} />
              ))}
            </tbody>
          </table>
        </div>
    
        <div>
          <button className={styles.viewMore} onClick={handleViweMore}>
            View More
          </button>
        </div>
      </div>
    )
}

 
export default Table;