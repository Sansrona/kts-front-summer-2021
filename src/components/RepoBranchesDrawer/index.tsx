import React from "react";

import { Drawer } from "antd";
import "antd/dist/antd.css";
import { BranchItem } from "src/store/GitHubStore/types";

type RepoBranchesDrawerProps = {
  visible: boolean;
  onCloseDrawer: () => void;
  branches: BranchItem[];
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  visible,
  onCloseDrawer,
  branches,
}) => {
  return (
    <Drawer
      title="Branches List"
      placement="right"
      onClose={onCloseDrawer}
      visible={visible}
    >
      {branches.map((branch) => (
        <p>{branch.name}</p>
      ))}
    </Drawer>
  );
};

export default RepoBranchesDrawer;
