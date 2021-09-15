import { useContext } from "react";

import { ReposContext } from "../App";

const useReposContext = () => {
  return useContext(ReposContext);
};

export default useReposContext;
