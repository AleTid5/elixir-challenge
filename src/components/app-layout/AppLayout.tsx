import type { PropsWithChildren } from "react";
import { Container, em, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const AppLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Container py={isMobile ? "0" : "xl"}>
      <Flex
        gap="xl"
        justify="center"
        align="flex-start"
        direction={isMobile ? "column" : "row"}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default AppLayout;
