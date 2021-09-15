import React, { useEffect, useState } from "react";

import { gitHubStore } from "@root/root";
import { Drawer } from "antd";
import "antd/dist/antd.css";
import { BranchItem } from "src/store/GitHubStore/types";

type RepoBranchesDrawerProps = {
  visible: boolean;
  onCloseDrawer: () => void;
  selectedRepo: string;
};

const EXAMPLE_ORGANIZATION = "ktsstudio";

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  visible,
  onCloseDrawer,
  selectedRepo,
}) => {
  const [branches, setBranches] = useState<BranchItem[]>([]);

  useEffect(() => {
    selectedRepo.length &&
      gitHubStore
        .getOrganizationRepoBranchesList({
          owner: EXAMPLE_ORGANIZATION,
          repo: selectedRepo,
        })
        .then((result) => setBranches(result.data));
  }, [selectedRepo, gitHubStore.getOrganizationRepoBranchesList]);
  return (
    <Drawer
      title="Branches List"
      placement="right"
      onClose={onCloseDrawer}
      visible={visible}
    >
      {branches.map((branch) => (
        <p key={branch.name}>{branch.name}</p>
      ))}
    </Drawer>
  );
};

export default RepoBranchesDrawer;
