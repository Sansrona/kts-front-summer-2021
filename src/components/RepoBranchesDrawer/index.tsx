import React, { useEffect, useState } from "react";

import { gitHubStore } from "@root/root";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import { useParams, useHistory } from "react-router-dom";
import { BranchItem } from "src/store/GitHubStore/types";

const EXAMPLE_ORGANIZATION = "ktsstudio";

const RepoBranchesDrawer: React.FC = () => {
  const [branches, setBranches] = useState<BranchItem[]>([]);
  const { repoName } = useParams<{ repoName: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    gitHubStore
      .getOrganizationRepoBranchesList({
        owner: EXAMPLE_ORGANIZATION,
        repo: repoName,
      })
      .then((result) => {
        setBranches(result.data);
        setIsLoading(false);
      });
  }, [repoName]);

  const onCloseDrawer = (): void => {
    history.push("/repos");
  };
  return (
    <Drawer
      title="Branches List"
      placement="right"
      onClose={onCloseDrawer}
      visible={true}
    >
      {isLoading
        ? "Загрузка..."
        : branches.map((branch) => <p key={branch.name}>{branch.name}</p>)}
    </Drawer>
  );
};

export default RepoBranchesDrawer;
