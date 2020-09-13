import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row" justifyContent="space-between" px={8} py={4}>
        <Stack isInline spacing={4}>
          <Icon name="logo" color="black" size="24px" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex>
          <Link mr={5}>Account</Link>
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex maxWidth={800} ml="auto" mr="auto" direction="column" w="100%">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
            </BreadcrumbItem>
            <Heading>Sites</Heading>
            {children}
          </Breadcrumb>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
