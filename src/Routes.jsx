import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import WellnessChallengesMainPage from "pages/WellnessChallengesMainPage";
import WellnessChallengesMainPageOne from "pages/WellnessChallengesMainPageOne";
import WellnessChallengesMainPageTwo from "pages/WellnessChallengesMainPageTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "wellnesschallengesmainpage",
      element: <WellnessChallengesMainPage />,
    },
    {
      path: "wellnesschallengesmainpageone",
      element: <WellnessChallengesMainPageOne />,
    },
    {
      path: "wellnesschallengesmainpagetwo",
      element: <WellnessChallengesMainPageTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
