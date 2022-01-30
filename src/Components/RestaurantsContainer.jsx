import { useSelector } from 'react-redux';

import { get } from '../Utils/utils';

import RestaurantItem from './RestaurantItem';

export default function RestaurantsContainer() {
  const restaurants = [
    {
      id: 1,
      name: '마법사 주방',
      address: '서울시 강남구',
    },
  ];
  // const restaurants = useSelector(get('restaurants'));

  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}
