import React from "react";
import Header from "./components/Header";
import Wrapper from "./Wrapper";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;
