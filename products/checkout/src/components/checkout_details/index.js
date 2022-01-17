import React from 'react';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';
import CheckoutItem from '../checkout_item';

const Wrapper = React.lazy(() => import('shared/Wrapper'));
const Header = React.lazy(() => import('shared/Header'));
const Button = React.lazy(() => import('shared/Button'));

const CheckoutDetails = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const onPurchaseClick = () => {
    fetch('http://localhost:8003', {method: 'POST', body: JSON.stringify(itemsInCart)})
     .then(
        response => {
          console.log('Successfully fetched data from backend');
          console.log(response);
          return response.json();
        })
     .then(_ => {
        setItemsInCart([]);
        setNotification({ type: 'success', message: 'Thank you for your purchase!' });
      })
     .catch(error => {
        console.log('Error while fetching data from the backend');
        console.log(error);
        setNotification({ type: 'error', message: 'Something went wrong! Please try again!' });
      }); 
  }

  return (
    <AsyncLoader>
      <Wrapper>
        <CheckoutDetailsLayout>
          {itemsInCart.map((item) => <CheckoutItem key={item.name} item={item} />)}
          {itemsInCart.length === 0 && (
            <Header style={{ textAlign: 'center' }}>No items in your cart yet!</Header>
          )}
          {itemsInCart.length > 0 && (
            <Button noMargin onClick={onPurchaseClick}>
              Purchase
            </Button>
          )}
        </CheckoutDetailsLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const CheckoutDetailsLayout = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CheckoutDetails;
