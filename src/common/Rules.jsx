export const usernameRule = [
     {
          required: true,
          min: 6,
          max: 30,
          message: "Please input your nickname!",
          whitespace: true,
     },
];
export const passwordRule = [
     {
          required: true,
          min: 6,
          max: 30,
          message: "Please input your password!",
     },
];
export const emailRule = [
     {
          type: "email",
          message: "The input is not valid E-mail!",
     },
     {
          required: true,
          message: "Please input your E-mail!",
     },
];

export const rePasswordRule = [
     {
          required: true,
          message: "Please confirm your password!",
     },
     ({ getFieldValue }) => ({
          validator(_, value) {
               if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
               }
               return Promise.reject(
                    new Error("The new password that you entered do not match!")
               );
          },
     }),
];
