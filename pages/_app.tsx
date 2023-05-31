import { MeshApp } from "@uniformdev/mesh-sdk-react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // The <MeshApp> component must wrap the entire app to provide Uniform Mesh SDK services
    <MeshApp>
      <QueryClientProvider client={new QueryClient()}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </MeshApp>
  );
}

export default MyApp;
