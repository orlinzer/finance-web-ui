// importing the css file and the media
import "../styles/page.css";
import StockTable from "./components/StockTable"; // Adjust path as needed
export default function Home() {
  return (
    <div id="bodyDiv">

      <div id="titleDiv">
        Finance
      </div>

      <div id="paragraphDiv">
        <p id="paragraph">Welcome to our finance app</p>
      </div>

      <div id="tableDiv">
        <div className="p-5">
          <h1 className="text-2xl font-semibold mb-4 text-white">Stock Market Overview</h1>
          <StockTable />
        </div>

      </div>

    </div>

  );
}
