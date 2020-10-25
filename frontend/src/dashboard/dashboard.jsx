import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Tableau de bord" small="Version 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="CAD$ 10"
              text="Total de Crédits"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="CAD$ 10"
              text="Total de Débits"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="CAD$ 0"
              text="Valeur consolidée"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
