import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@compounds";
import { ApplicationWrapper } from "@atomics/layout";
import AppRouter from "./AppRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <ApplicationWrapper $justifyContent="center" $column>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AppRouter />
      </QueryClientProvider>
    </ApplicationWrapper>
  );
}

export default App;
