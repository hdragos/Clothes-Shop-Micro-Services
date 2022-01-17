import React from 'react';
import styled from 'styled-components';
//import items from '../../fixtures/items';
import ItemListItem from '../item_list_item';
import AsyncLoader from '../async_loader';

const Wrapper = React.lazy(() => import('shared/Wrapper'));

const ItemList = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
     fetch('http://localhost:8001')
     .then(
        response => {
          console.log('Successfully fetched data from backend');
          console.log(response);
          return response.json();
        })
     .then(fetchedItems => setItems(fetchedItems))
     .catch(error => {
       console.log('Error while fetching data from the backend');
       console.log(error);
      }); 
  }, [itemsInCart]);

  const itemsAvailable = items.filter(item => !itemsInCart.find(itemInCart => itemInCart.id === item.id));

  const onAddItem = (itemToAdd) => {
    setItemsInCart([...itemsInCart, itemToAdd]);
    setNotification({ type: 'success', message: 'Item added to cart!' });
  }

  return (
    <AsyncLoader>
      <Wrapper>
        <ItemListLayout>
          {
            itemsAvailable.map(item =>
              <ItemListItem
                key={item.name}
                item={item}
                onAddItem={onAddItem}
              />
            )
          }
        </ItemListLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const ItemListLayout = styled.div`
  padding: 30px 0;
`;

export default ItemList;
