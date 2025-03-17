"use client"; // Ensure this is a client component

import React from "react";

const StockTable = () => {
  const stocks = [
    { name: "Tesla", ticker: "TSLA", price: 192.34, change: "+3.25%", volume: "32M" },
    { name: "Apple", ticker: "AAPL", price: 145.65, change: "-0.56%", volume: "82M" },
    { name: "Microsoft", ticker: "MSFT", price: 250.12, change: "+1.12%", volume: "45M" },
    { name: "Amazon", ticker: "AMZN", price: 3301.65, change: "+0.98%", volume: "62M" },
    { name: "Google", ticker: "GOOGL", price: 2789.45, change: "-0.22%", volume: "34M" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="py-3 px-4 text-sm font-semibold text-gray-700">Stock Name</th>
            <th className="py-3 px-4 text-sm font-semibold text-gray-700">Ticker</th>
            <th className="py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
            <th className="py-3 px-4 text-sm font-semibold text-gray-700">Change</th>
            <th className="py-3 px-4 text-sm font-semibold text-gray-700">Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-800">{stock.name}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{stock.ticker}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{`$${stock.price.toFixed(2)}`}</td>
              <td className={`py-3 px-4 text-sm ${stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change}
              </td>
              <td className="py-3 px-4 text-sm text-gray-800">{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
