export default function LoginForm({ fields, onChange, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={fields.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={fields.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        로그인
      </button>
    </div>
  );
}
