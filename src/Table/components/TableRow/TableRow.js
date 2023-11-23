import React from 'react';

const TableRow = ({crypto}) => {
   return (
      <tr>
         <td>{crypto.rank}</td>
         <td className="name-coins">
            <div className="all-names">
                  <p className="name">{crypto.name}</p>
                  <p className="short-name">{crypto.symbol}</p>
            </div>
         </td>
         <td>
            <span className="num">${parseFloat(crypto.priceUsd).toFixed(2)}</span>
         </td>
         <td>
            <span className="num">{parseFloat(crypto.marketCapUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 })}b</span>
         </td>
         <td>
            <span className="num">{parseFloat(crypto.volumeUsd24Hr).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 1, maximumFractionDigits: 1 })}b</span>
         </td>
         <td>
            <span className="num">{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</span>
         </td>
      </tr>
   );
};

export default TableRow;