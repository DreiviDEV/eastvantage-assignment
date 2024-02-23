import { Box } from "@mui/material";
import { UserCardContainer } from "./components/UserCardContainer";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <UserCardContainer />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
