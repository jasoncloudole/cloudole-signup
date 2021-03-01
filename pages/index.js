import { Button, Form, FormLayout, Page, TextField } from "@shopify/polaris";
import { CookiesProvider, withCookies } from "react-cookie";

import React from "react";
import axios from "axios";

axios.defaults.baseURL =
  "https://us-central1-cloudole-2f23d.cloudfunctions.net/api";

function Index(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = () => {
    axios
      .post("/signup", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        shopName: props.shop,
      })
      .then(() => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
  };

  const handleEmailChange = React.useCallback((value) => setEmail(value), []);
  const handlePasswordChange = React.useCallback(
    (value) => setPassword(value),
    []
  );
  const handleConfirmPasswordChange = React.useCallback(
    (value) => setConfirmPassword(value),
    []
  );

  return (
    <CookiesProvider>
      <Page narrowWidth title="Sign up to Cloudole">
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              value={email}
              onChange={handleEmailChange}
              label="Email"
              type="email"
            />
            <TextField
              value={password}
              onChange={handlePasswordChange}
              label="Password"
              type="password"
            />
            <TextField
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              label="Confirm Password"
              type="password"
            />
            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
      </Page>
    </CookiesProvider>
  );
}

export default withCookies(Index);
