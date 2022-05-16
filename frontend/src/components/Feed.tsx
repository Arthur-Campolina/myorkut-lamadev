import { Box } from "@mui/material";
import MyCard from "./MyCard";


const Feed = () => {
  return (
    <Box flex={3} p={2}>
      <MyCard />
      <MyCard />
    </Box>
  );
};
export default Feed;
