import { Grid } from "@mantine/core";
import CardSkeleton from "./components/card-skeleton";

const SkeletonList = () => (
  <Grid>
    {Array(4).fill(
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <CardSkeleton />
      </Grid.Col>,
    )}
  </Grid>
);

export default SkeletonList;
