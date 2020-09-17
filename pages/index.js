import { Button, Text, Code, Icon, Flex } from '@chakra-ui/core';
import Head from 'next/head';
import cookie from 'js-cookie';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
          }}
        />
        <title> Fast Feedback App</title>
      </Head>

      <Icon color="black" name="logo" size="40px" />
      <Text>
        Current user: <Code>{auth.user ? auth.user.email : 'none'}</Code>
      </Text>
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button size="sm" mt={4} onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
