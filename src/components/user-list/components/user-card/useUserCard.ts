import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";

const useUserCard = () => {
  const isSmallTablet = useMediaQuery(`(max-width: ${em(825)})`);

  return {
    imageSize: isSmallTablet ? 70 : 86,
  };
};

export default useUserCard;
