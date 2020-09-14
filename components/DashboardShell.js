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
  Button
} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();
  return (
    <Flex flexDirection="column" backgroundColor="gray.100">
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
      <Flex
        backgroundColor="gray.100"
        p={8}
        height="100vh"
        margin="0 auto"
        direction="column"
        maxW="1250px"
        px={8}
      >
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Flex justifyContent="space-between">
            <Heading mb={8}>My Sites</Heading>
            <AddSiteModal> + Add Site</AddSiteModal>
          </Flex>
          {children}
        </Breadcrumb>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
