import React from "react";
import Header from "./components/Header";
import Wrapper from "./Wrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import Articles from "./components/Articles";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Articles />
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;
