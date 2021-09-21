import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import "./App.scss";
import { RepoBranchesDrawer } from "@components/index";
import Repos from "@pages/Repos/";
import { gitHubStore } from "@root/root";
import { PER_PAGE, EXAMPLE_ORGANIZATION } from "@utils/constants";
import { Switch, Route, Redirect } from "react-router-dom";
import { RepoItem } from "src/store/GitHubStore/types";

export type ReposContextProps = {
  repos: RepoItem[];
  isLoading: boolean;
  load: Dispatch<SetStateAction<boolean>>;
  fetchData: () => void;
  currentPage: number;
};

export const ReposContext = createContext<ReposContextProps>({
  repos: [],
  isLoading: false,
  load: () => {},
  fetchData: () => {},
  currentPage: 1,
});

const Provider = ReposContext.Provider;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = () => {
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
        PER_PAGE,
        currentPage,
      })
      .then((result) => {
        setRepos((repos) => [...repos, ...result.data]);
      });
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Provider
      value={{
        repos,
        isLoading,
        load: setIsLoading,
        fetchData,
        currentPage: currentPage,
      }}
    >
      <Switch>
        <Route exact path="/repos">
          <Repos />
        </Route>
        <Route path="/repos/:repoName">
          <RepoBranchesDrawer />
        </Route>
        <Redirect to="/repos" />
      </Switch>
    </Provider>
  );
};

export default App;
