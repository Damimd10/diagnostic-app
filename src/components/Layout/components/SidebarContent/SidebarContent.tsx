import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Heading,
  Skeleton,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import usePatients from "../../../../hooks/usePatients";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
  const query = usePatients();
  console.log(query);
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box display="flex">
        <Stack divider={<StackDivider />} spacing="4">
          {query.isLoading && <Skeleton height="20px" />}
          {!query.isLoading &&
            query.data &&
            query.data.patients.map((patient) => (
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            ))}
        </Stack>
      </Box>
    </Box>
  );
}
