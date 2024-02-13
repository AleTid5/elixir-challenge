import type { PropsWithChildren } from "react";
import { Container, Flex } from "@mantine/core";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container py="xl">
      <Flex gap="xl" justify="center" align="flex-start" direction="row">
        {children}
      </Flex>
    </Container>
  );
};

export default AppLayout;
