/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import RestaurantItem from './RestaurantItem';

jest.mock('react-redux');

describe('RestaurantsItem', () => {
  const restaurant = {
    id: 1,
    name: '마법사 주방',
    address: '서울시 강남구',
  };
  it('renders restaurnats', () => {
    const { container } = render((
      <RestaurantItem
        restaurant={restaurant}
      />
    ));

    expect(container).toHaveTextContent('마법사 주방');
  });
});
