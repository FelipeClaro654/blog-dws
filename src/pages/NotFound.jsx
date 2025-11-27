import { Column, Grid } from "@/components/atomics/layout";
import { H3 } from "@/components/atomics/typography";
import React from "react";

const NotFound = () => {
  return (
    <Grid>
      <Column $centerH>
        <H3>Page not found!</H3>
      </Column>
    </Grid>
  );
};

export default NotFound;
