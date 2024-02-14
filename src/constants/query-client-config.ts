const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
};

export default queryClientConfig;
