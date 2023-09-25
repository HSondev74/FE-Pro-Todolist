import { Button, Result } from "antd";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
     const error = useRouteError();
     console.log(error);
     return (
          <Result
               status={error.status}
               title={error.title}
               subTitle={error.statusText || error.message}
               extra={<Button type="primary">Back Home</Button>}
          />
     );
};

export default ErrorPage;
