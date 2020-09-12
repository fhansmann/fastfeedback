import React from 'react';

import { Heading, Box, Button, Text } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Box
      width="100%"
      color="whiteAlpha.500"
      backgroundColor="white"
      p={8}
      borderRadius="8px"
    >
      <Heading color="black" size="md">
        You haven't added any sites
      </Heading>
      <Text color="gray.500">Welcome, lets get started!</Text>
      <Button backgroundColor="blackAlpha.50" color="black">
        Add your first site
      </Button>
    </Box>
  </DashboardShell>
);

export default EmptyState;
