import { memo } from "react";
import { Button, Column } from "@atomics";
import { ArrowUpDown } from "lucide-react";
import spaces from "@theme/spaces";
import colors from "@theme/colors";

export const PostsOrder = memo(({ setSortOrder, sortOrder }) => {
  return (
    <Column>
      <Button
        $gap={spaces["8px"]}
        variant="ghost"
        onClick={() =>
          setSortOrder((state) => {
            return state === "Newest" ? "Oldest" : "Newest";
          })
        }
      >
        {sortOrder} first <ArrowUpDown size={20} color={colors.accent1.dark} />
      </Button>
    </Column>
  );
});
