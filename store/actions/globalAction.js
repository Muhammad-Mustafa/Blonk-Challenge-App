export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (name, email, password) => ({
  type: REGISTER_USER,
  payload: {
    name,
    email,
    password,
  },
});
