import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import "./App.scss";
import { RepoSearchPage } from "@components/index";
import { gitHubStore } from "@root/root";
import { PER_PAGE, EXAMPLE_ORGANIZATION } from "@utils/constants";
import InfiniteScroll from "react-infinite-scroll-component";
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
    <Provider value={{ repos, isLoading, load: setIsLoading }}>
      <Switch>
        <Route path="/repos">
          <InfiniteScroll
            next={fetchData}
            dataLength={currentPage * 5}
            hasMore={true}
            scrollThreshold={0.9}
            loader={<h4>Загрузка...</h4>}
          >
            <RepoSearchPage />
          </InfiniteScroll>
        </Route>
        <Redirect to="/repos" />
      </Switch>
    </Provider>
  );
};

export default App;
