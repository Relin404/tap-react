import { Component } from "react";
import "./App.css";
import { GoSell } from "@tap-payments/gosell";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  cb(response) {
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => GoSell.openLightBox()}>GoSell LightBox</button>
        <button onClick={() => GoSell.openPaymentPage()}>
          GoSell Payment Page
        </button>

        <GoSell
          gateway={{
            publicKey: "pk_test_AjGvuayfEepVO28DoiSxtrsR",
            language: "en",
            contactInfo: true,
            supportedCurrencies: "all",
            supportedPaymentMethods: "all",
            saveCardOption: true,
            customerCards: true,
            notifications: "standard",
            backgroundImg: {
              url: "imgUrl",
              opacity: "0.5",
            },
            callback: this.cb,
            labels: {
              cardNumber: "Card Number",
              expirationDate: "MM/YY",
              cvv: "CVV",
              cardHolder: "Name on Card",
              actionButton: "Pay",
            },
            style: {
              base: {
                color: "#535353",
                lineHeight: "18px",
                fontFamily: "sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "rgba(0, 0, 0, 0.26)",
                  fontSize: "15px",
                },
              },
              invalid: {
                color: "red",
                iconColor: "#fa755a ",
              },
            },
          }}
          customer={{
            first_name: "Ahmad Mashaal",
            email: "ahmadmashaal01@gmail.com",
          }}
          order={{
            amount: "199.99",
            currency: "SAR",
          }}
          transaction={{
            mode: "charge",
            charge: {
              saveCard: false,
              threeDSecure: true,
              description: "Test Subscription by Ahmad Mashaal",
              statement_descriptor: "Test Subscription",
              reference: {
                transaction: "order_001",
                order: "order_001",
              },
              metadata: {
                orderTransactionId: "order_001",
                orderId: "order_001",
                custId: 1,
              },
              receipt: {
                email: true,
                sms: true,
              },
              redirect: "http://localhost:3000/api/payments/webhooks",
              post: "https://795d-156-221-24-220.ngrok-free.app/api/payments/callback",
            },
          }}
        />
      </div>
    );
  }
}

export default App;
