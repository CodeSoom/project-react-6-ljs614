/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restuarnats: [
        {
          id: 1,
          name: '마법사 주방',
          address: '서울시 강남구',
        },
      ],
    }));
  });

  it('renders restaurnats', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('마법사 주방');
  });
});
