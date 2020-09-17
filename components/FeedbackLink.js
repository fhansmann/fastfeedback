import { Flex, Link } from '@chakra-ui/core';

export default function FeedbackLink({ siteID }) {
  return (
    <Flex
      justifyContent="space-between"
      mb={8}
      width="full"
      mt={1}
      //align={['flex-start', 'center']}
      //direction={['column', 'row']}
    >
      <Link
        color="grey.500"
        fontWeight="bold"
        fontSize="sm"
        href={`/p/${siteID}`}
        target="_blank"
      >
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/" target="_blank">
        Powered by Fast Feedback (Alpha)
      </Link>
    </Flex>
  );
}
