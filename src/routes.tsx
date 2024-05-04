import { createBrowserRouter } from "react-router-dom";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Home from "./pages/home";
import Error from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
  },
]);
