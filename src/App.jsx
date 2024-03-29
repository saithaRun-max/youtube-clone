import Head from "./components/Head";
import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,

    children: [
      { path: "*", element: <ErrorPage /> },

      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "list/:itemId",
        element: <Main />,
      },
      {
        path: "Home",
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <>
        <Head />
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
