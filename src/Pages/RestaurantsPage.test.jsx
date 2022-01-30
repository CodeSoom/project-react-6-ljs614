/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

test('RestaurantsPage', () => {
  render((
    <RestaurantsPage />
  ));
});
