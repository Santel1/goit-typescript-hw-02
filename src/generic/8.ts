/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};


type Params = {
  [K in keyof Form as K extends 'errors' ? never : K]: Form[K];
};

const params: Params = {
  email: 'example@mail.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '1234567890',
  // errors: {},
};

export {};