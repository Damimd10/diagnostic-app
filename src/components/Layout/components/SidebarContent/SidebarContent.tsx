import { useRef } from "react";
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

import NavItem from "../NavItem";
import usePatients from "../../../../hooks/usePatients";
import { useStore } from "./../../../../stores/useStore";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
  const updateSelectedPatient = useStore(
    (state) => state.updateSelectedPatient,
  );

  const headerRef = useRef<HTMLDivElement | null>(null);

  const query = usePatients();

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
      <Flex
        ref={headerRef}
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        aria-label="Main Navigation"
        as="nav"
        color="gray.600"
        direction="column"
        fontSize="sm"
        maxHeight={`calc(100% - ${headerRef.current?.clientHeight}px)`}
        overflow="auto"
      >
        {query.isLoading && <Skeleton height="20px" />}
        {!query.isLoading &&
          query.data &&
          query.data.patients.map((patient) => (
            <NavItem
              key={patient.HC}
              hc={patient.HC}
              onClick={updateSelectedPatient}
            >
              {patient.Nombre}
            </NavItem>
          ))}
      </Flex>
    </Box>
  );
}
