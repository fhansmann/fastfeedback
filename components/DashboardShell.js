import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Button,
  Text
} from '@chakra-ui/core';

const DashboardShell = ({ children }) => (
  <Flex flexDirection="column">
    <Flex flexDirection="row" justifyContent="space-between" p={4}>
      <Stack isInline spacing={4}>
        <Icon name="logo" color={'black'} />
        <Link>Sites</Link>
        <Link>Feedback</Link>
      </Stack>
      <Flex>
        <Link mr={5}>Account</Link>
        <Avatar size="sm" />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.50" p={8} height="100%">
      <Flex maxWidth={800} ml="auto" mr="auto">
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Heading>Sites</Heading>
          {children}
        </Breadcrumb>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
