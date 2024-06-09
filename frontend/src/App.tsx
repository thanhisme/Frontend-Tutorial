import { Toaster } from "react-hot-toast";
import "./App.css";

import {
	QueryClient,
	QueryClientProvider,
	keepPreviousData,
} from "@tanstack/react-query";
import { DashBoard } from "./pages";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchInterval: false,
			gcTime: 1000 * 60 * 60 * 24,
			staleTime: 1000 * 60 * 60 * 24,
			placeholderData: keepPreviousData,
		},
	},
});

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<DashBoard />
		</QueryClientProvider>
	);
};

export default App;
