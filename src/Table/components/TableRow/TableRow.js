import React from 'react';
import styles from './TableRow.module.css';


const TableRow = ({crypto}) => {
   return (
      <tr>
         <td>{crypto.rank}</td>
         <td className={styles.nameCoins}>
            <div className={styles.allNames}>
                  <p className={styles.name}>{crypto.name}</p>
                  <p className={styles.shortName}>{crypto.symbol}</p>
            </div>
         </td>
         <td>
            <span className={styles.num}>${parseFloat(crypto.priceUsd).toFixed(2)}</span>
         </td>
         <td>
            <span className={styles.num}>{parseFloat(crypto.marketCapUsd /1e9).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 })}b</span>
         </td>
         <td>
            <span className={styles.num}>{parseFloat(crypto.vwap24Hr).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 })}b</span>
         </td>
         <td>
            <span className={styles.num}>{parseFloat(crypto.supply/1e6).toFixed(2)}m</span>
         </td>
         <td>
            <span className={styles.num}>{parseFloat(crypto.volumeUsd24Hr /1e9).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 })}b</span>
         </td>
         <td>
            <span className={styles.num}>{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</span>
         </td>
      </tr>
   );
};

export default TableRow;