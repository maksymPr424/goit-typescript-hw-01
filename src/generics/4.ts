type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

type UpdateUser = Partial<User>;

function createOrUpdateUser(initialValues: UpdateUser) {
  // Оновлення користувача
  return initialValues;
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
