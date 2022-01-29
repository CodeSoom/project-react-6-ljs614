/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { createAction } from '@reduxjs/toolkit';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: 'test',
      },
      accessToken: given.accessToken,
    }));
  });

  given('accessToken', () => '');

  it('renders input controls', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail').value).toBe('test@test.com');
    expect(getByLabelText('Password').value).toBe('test');
  });

  it('listens change events', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    const changeLoginField = createAction('application/changeLoginField');

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new@test.com' },
    });

    expect(dispatch).toBeCalledWith(changeLoginField({ name: 'email', value: 'new@test.com' }));
  });

  // it('renders login button', () => {
  //   const { getByText } = render((
  //     <LoginFormContainer />
  //   ));

  //   fireEvent.click(getByText('로그인'));

  //   expect(dispatch).toBeCalled();
  // });
});
