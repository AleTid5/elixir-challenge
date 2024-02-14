import { Grid } from "@mantine/core";
import CardSkeleton from "./components/card-skeleton";

const SkeletonList = () => (
  <Grid>
    {Array.from({ length: 10 }, (_, i) => (
      <Grid.Col key={i} span={{ base: 12, xs: 6 }}>
        <CardSkeleton />
      </Grid.Col>
    ))}
  </Grid>
);

export default SkeletonList;
