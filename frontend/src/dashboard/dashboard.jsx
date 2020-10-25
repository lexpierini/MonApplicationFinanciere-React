import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Tableau de bord" small="Version 1.0" />
        <Content>Dashboard</Content>
      </div>
    );
  }
}

export default Dashboard;
