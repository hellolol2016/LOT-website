import { React, useEffect } from 'react'
import { PayPalButton } from 'react-paypal-button-v2';

function Donate() {
    return (
      <>
        <div class="background5 parallax"></div>
        <div class="body1 white-background">
          <PayPalButton
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );

              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              });
            }}
            options={{
              clientId: "PRODUCTION_CLIENT_ID",
            }}
          />
        </div>
      </>
    );
}

export default Donate
