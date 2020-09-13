import React from 'react';
import { Heading, Flex, Button, Text } from '@chakra-ui/core';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    color="whiteAlpha.500"
    backgroundColor="white"
    p={8}
    borderRadius="8px"
    justify="center"
    align="center"
    direction="column"
  >
    <Heading mb={2} size="lg" color="black" size="md">
      You haven't added any sites
    </Heading>
    <Text mb={4} color="gray.500">
      Welcome, lets get started!
    </Text>
    <AddSiteModal />
  </Flex>
);

export default EmptyState;
