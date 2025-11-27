import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/compounds";
import { ApplicationWrapper } from "./components/atomics/layout";
import AppRouter from "./AppRouter";

function App() {
  const queryClient = new QueryClient();

  return (
    <ApplicationWrapper>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AppRouter />
      </QueryClientProvider>
    </ApplicationWrapper>
  );
}

export default App;
