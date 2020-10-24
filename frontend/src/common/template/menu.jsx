import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default (props) => (
  <ul className="sidebar-menu">
    <MenuItem path="#" label="Tableau de bord" icon="dashboard" />
    <MenuTree label="Enregistrement" icon="edit">
      <MenuItem path="#billingCycles" label="Cycles de paiement" icon="usd" />
    </MenuTree>
  </ul>
);
