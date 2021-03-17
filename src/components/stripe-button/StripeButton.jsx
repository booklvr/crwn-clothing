import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51IVmgrAHd5gcuCZwtQv2XphyKwWFR4oNSoPkSNfRqgSPQQMS6lfykmZyBjJsjoL00Jyp91wopY3bt1OaAP35eYV5002BUSjiYZ'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      image={'https://sendeyo.com/up/d/f3eb2117da'}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
