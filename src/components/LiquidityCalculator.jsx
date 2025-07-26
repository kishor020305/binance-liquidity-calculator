import React, { useState } from "react";
import "../styles/calculator.css";

export default function LiquidationCalculator() {
  const [coinName, setCoinName] = useState("BTC");
  const [entryPrice, setEntryPrice] = useState(30000);
  const [leverage, setLeverage] = useState(10);
  const [walletBalance, setWalletBalance] = useState(500);
  const [usedMargin, setUsedMargin] = useState(100);
  const [positionType, setPositionType] = useState("long");
  const [stopLossPrice, setStopLossPrice] = useState(0);
  const [takeProfitPrice, setTakeProfitPrice] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const maintenanceMarginRate = 0.005;
    const positionValue = usedMargin * leverage;
    const positionSize = positionValue / entryPrice;

    let liqPriceIsolated, liqPriceCross, stopLossRisk = null, profitTarget = null;

    if (positionType === "long") {
      liqPriceIsolated = entryPrice * (1 - 1 / leverage + maintenanceMarginRate / leverage);
      liqPriceCross = entryPrice - (walletBalance / positionSize);
      if (stopLossPrice > 0) {
        stopLossRisk = (entryPrice - stopLossPrice) * positionSize;
      }
      if (takeProfitPrice > 0) {
        profitTarget = (takeProfitPrice - entryPrice) * positionSize;
      }
    } else {
      liqPriceIsolated = entryPrice * (1 + 1 / leverage - maintenanceMarginRate / leverage);
      liqPriceCross = entryPrice + (walletBalance / positionSize);
      if (stopLossPrice > 0) {
        stopLossRisk = (stopLossPrice - entryPrice) * positionSize;
      }
      if (takeProfitPrice > 0) {
        profitTarget = (entryPrice - takeProfitPrice) * positionSize;
      }
    }

    setResult({
      coin: coinName,
      positionSize: positionSize.toFixed(6),
      liqPriceIsolated: liqPriceIsolated.toFixed(8),
      liqPriceCross: liqPriceCross.toFixed(8),
      stopLossRisk: stopLossRisk !== null ? stopLossRisk.toFixed(4) : "N/A",
      profitTarget: profitTarget !== null ? profitTarget.toFixed(4) : "N/A"
    });
  };

  const reset = () => {
    setCoinName("BTC");
    setEntryPrice(30000);
    setLeverage(10);
    setWalletBalance(500);
    setUsedMargin(100);
    setPositionType("long");
    setStopLossPrice(0);
    setTakeProfitPrice(0);
    setResult(null);
    setError("");
  };

  return (
    <div className="calculator-container">
      <h2>Binance Liquidation Calculator</h2>

      <div className="calculator-grid">
        <label>Coin Name:
          <input type="text" value={coinName} onChange={e => setCoinName(e.target.value.toUpperCase())} />
        </label>
        <label>Leverage (x):
          <input type="number" step="any" value={leverage} onChange={e => setLeverage(+e.target.value)} />
        </label>
        <label>Wallet Balance ($):
          <input type="number" step="any" value={walletBalance} onChange={e => setWalletBalance(+e.target.value)} />
        </label>
        <label>Used Margin ($):
          <input type="number" step="any" value={usedMargin} onChange={e => setUsedMargin(+e.target.value)} />
        </label>
        <label>Entry Price ($):
          <input type="number" step="any" value={entryPrice} onChange={e => setEntryPrice(+e.target.value)} />
        </label>
        <label>Take-Profit Price ($):
          <input type="number" step="any" value={takeProfitPrice} onChange={e => setTakeProfitPrice(+e.target.value)} />
        </label>
        <label>Stop-Loss Price ($):
          <input type="number" step="any" value={stopLossPrice} onChange={e => setStopLossPrice(+e.target.value)} />
        </label>
        <label>Position Type:
          <select value={positionType} onChange={e => setPositionType(e.target.value)}>
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </label>
      </div>

      {error && <p className="error-msg">{error}</p>}

      <div className="button-group">
        <button onClick={calculate}>Calculate</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>

      {result && (
        <div className="result-box">
          <h3>Results for {result.coin}</h3>
          <p>Position Size: <strong>{result.positionSize}</strong> {result.coin}</p>
          <p>Isolated Liquidation Price: <strong>${result.liqPriceIsolated}</strong></p>
          <p>Cross Liquidation Price: <strong>${result.liqPriceCross}</strong></p>
          <p>Estimated Loss at Stop-Loss: <strong>${result.stopLossRisk}</strong></p>
          <p>Estimated Profit at Take-Profit: <strong>${result.profitTarget}</strong></p>
        </div>
      )}
    </div>
  );
}
