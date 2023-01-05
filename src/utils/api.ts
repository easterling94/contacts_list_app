const BASE_URL = 'http://localhost:5001';
const URL_USERS = BASE_URL + '/users';

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
  }
};

export const getUsers = async (cookie: string) => {
  /*
    Куки используются для авторизации и отправке персонафицированных данных на клиент
  */
  const data = await fetch(URL_USERS, {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      authorization: cookie,
    }
  }).then(checkResponse);
  return data;
};
