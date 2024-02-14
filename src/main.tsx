import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import queryClientConfig from "@/constants/query-client-config.ts";
import "@mantine/core/styles.css";
import App from "./App";

const queryClient = new QueryClient(queryClientConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MantineProvider>
  </QueryClientProvider>,
);
