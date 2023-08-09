import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
export default function PasswordReset() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
        <Img src = "logo.png" alt="logo" width="100"
            height="100"/>
          <Section>
            <Text style={text}>Forgot your password?</Text>
            <Text style={text}>
            Click the link below to reset your password.
            </Text>
            <Button style={button} href={"http://localhost:3000/reset_password_link"}>
              Reset password
            </Button>
            <Text style={text}>
              If you don&apos;t want to change your password or didn&apos;t
              request this, just ignore and delete this message.
            </Text>
            <Text style={text}>
              To keep your account secure, please don&apos;t forward this email
              to anyone. 
            </Text>
            <Text style={text}>All the best, {''}
            The Online-Books team.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const button = {
  backgroundColor: 'rgb(37 99 235)',
  borderRadius: '24px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  width: '210px',
  padding: '16px 8px',
};
