import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import "./App.css";
import { RepoSearchPage } from "@components/index";
import { gitHubStore } from "@root/root";
import { Switch, Route, Redirect } from "react-router-dom";
import { RepoItem } from "src/store/GitHubStore/types";

export type ReposContextProps = {
  repos: RepoItem[];
  isLoading: boolean;
  load: Dispatch<SetStateAction<boolean>>;
};

export const ReposContext = createContext<ReposContextProps>({
  repos: [],
  isLoading: false,
  load: () => {},
});

const Provider = ReposContext.Provider;
const EXAMPLE_ORGANIZATION = "ktsstudio";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<RepoItem[]>([]);

  useEffect(() => {
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
      })
      .then((result) => {
        setRepos(result.data);
      });
  }, []);
  return (
    <Provider value={{ repos, isLoading, load: setIsLoading }}>
      <Switch>
        <Route path="/repos" component={RepoSearchPage} />
        <Redirect to="/repos" />
      </Switch>
    </Provider>
  );
};

export default App;
