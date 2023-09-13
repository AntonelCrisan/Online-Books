import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface reset_passwordProps {
    resetPasswordLink?: string;
  }
  
  export const reset_password = ({
    resetPasswordLink = 'http://localhost:3000/reset_password_link',
  }: reset_passwordProps) => {
    return (
      <Html>
        <Head />
        <Preview>Reset your password</Preview>
        <Body style={main}>
          <Container style={container}>
            <Img
            style={img}
              src={`/static/logo.png`}
              width="70"
              height="70"
              alt="Online Books"
            />
            <Section>
              <Text style={text}>
                Someone recently requested a password change for your Online Books
                account. If this was you, you can set a new password here:
              </Text>
              <Button style={button} href={resetPasswordLink}>
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
              <Text style={text}>All the best, The Online Books team.</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default reset_password;
  const img = {
    margin: '0 auto',
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
    borderRadius: '30px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    textAlign: 'center' as const,
    width: '210px',
    padding: '10px 7px',
  };
  
  