import axios from "axios";

export const login = async (requestBody) => {
     const apiUrl = "https://backoffice.nodemy.vn/api/auth/local/register";
     try {
          const response = await axios.post(apiUrl, requestBody, {
               headers: {
                    "Content-Type": "application/json",
               },
          });
          return response.data;
     } catch (error) {
          throw error;
     }
};
