import React from 'react';

import { Heading, Box, Button, Text } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box
      width="100%"
      color="whiteAlpha.500"
      backgroundColor="white"
      p={8}
      borderRadius="8px"
    >
      <Heading color="black" size="md">
        Get Feedback On Your Site Instantly
      </Heading>
      <Text color="gray.500">Start today, then grow with us!</Text>
      <Button backgroundColor="blackAlpha.50" color="black">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
