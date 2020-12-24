import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
function StripeButton({price}) {
    const priceForStripe=price*100
    const publishablekey='pk_test_51I1br2C9RH3PyCTA9FUkAi4IexISGGpiLynVjoV9pYadIkSsFIbv1NtMPAiRKseZaMmc47iN9uboXI4ZNapyTPKm00YHvGOaXz'
    const onToken=token=>{
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <div>
            <StripeCheckout 
              label='Pay Now'
              name='Crown Clothing Ltd.'
              billingAddress
              shippingAddress
              image='https://svgshare.com/i/CUz.svg'
              description={`Your total is Rs. ${price}`}
              amount={priceForStripe}
              panelLabel='Pay Now'
              token={onToken}
              stripeKey={publishablekey}
            />
        </div>
    )
}

export default StripeButton
