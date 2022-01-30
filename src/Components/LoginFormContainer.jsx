import { useSelector, useDispatch } from 'react-redux';

import { changeLoginField } from '../redux/slice';

import LoginForm from './LoginForm';

import { get } from '../Utils/utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <LoginForm
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
