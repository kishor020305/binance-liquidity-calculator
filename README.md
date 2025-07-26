# Binance Liquidation Calculator 🧾📉

A **React-based web application** that helps crypto traders calculate important risk metrics for their Binance futures trades. It provides real-time calculations for:

* **Isolated and Cross Liquidation Prices**
* **Estimated Loss at Stop-Loss**
* **Estimated Profit at Take-Profit**


---

## 🚀 Features

* 🔄 Real-time liquidation calculation
* 🧑‍🌾 Long and short position support
* 📉 Profit and loss estimates based on Stop-Loss and Take-Profit
* 🌗 Dark mode toggle
* 📱 Mobile responsive
* 🔄 Reset button to clear inputs

---

## 🧪 Tech Stack

* **React** (Functional Components with Hooks)
* **CSS3** for custom styling and themes
* **HTML5** for semantic structure
* Responsive design using **CSS Grid**

---

## 📆 Project Structure

```
src/
├── components/
│   └── LiquidationCalculator.jsx   # Core calculator UI and logic
├── styles/
│   └── calculator.css              # Styling with dark mode and responsiveness
├── App.jsx                         # Renders the calculator
└── index.js                        # Entry point
```



## 🔧 Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/kishor-020305/binance-liquidation-calculator.git
cd binance-liquidation-calculator

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🧾 How It Works

1. Enter:

   * **Coin Name** (e.g., BTC)
   * **Entry Price**
   * **Leverage**
   * **Wallet Balance**
   * **Used Margin**
   * **Stop-Loss Price** *(optional)*
   * **Take-Profit Price** *(optional)*
   * **Position Type**: Long or Short

2. Click **Calculate** to get:

   * **Position Size**
   * **Isolated Liquidation Price**
   * **Cross Liquidation Price**
   * **Estimated Loss at Stop-Loss**
   * **Estimated Profit at Take-Profit**

3. Click **Reset** to clear all inputs.

4. Use the 🌙 **Dark Mode toggle** for a better experience.

---

## 📱 Mobile Responsiveness

This app is fully responsive and adjusts gracefully to all screen sizes using CSS Grid and media queries.

---

## 🌙 Dark Mode

Dark and light themes are built-in and can be toggled via the top-right button. The themes use CSS variables for easy management.

---

## 📃 License

MIT License. Free to use and modify.

---

## 🙌 Acknowledgements

* Inspired by traders and analysts using Binance Futures.
* Designed and developed with love using React 💚

---

## 🧑‍💻 Author

Made by **\[Your Name]**
Feel free to connect on [LinkedIn](https://www.linkedin.com/in/your-profile) or [GitHub](https://github.com/your-username).
