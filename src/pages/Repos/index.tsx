import React from "react";

import RepoSearchPage from "@components/RepoSearchPage";
import useReposContext from "@hooks/useReposContext";
import InfiniteScroll from "react-infinite-scroll-component";

const Repos = () => {
  const { currentPage, fetchData } = useReposContext();
  return (
    <InfiniteScroll
      next={fetchData}
      dataLength={currentPage * 5}
      hasMore={true}
      scrollThreshold={0.9}
      loader={<h4>Загрузка...</h4>}
    >
      <RepoSearchPage />
    </InfiniteScroll>
  );
};

export default Repos;
