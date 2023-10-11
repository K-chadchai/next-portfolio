import * as React from "react";

export interface RequestSendMail {
  body: {
    email: string;
    subject: string;
    message: string;
  };
}

export const EmailTemplate: React.FC<Readonly<string>> = (message) => (
  <div>
    <p>{message}</p>
  </div>
);
