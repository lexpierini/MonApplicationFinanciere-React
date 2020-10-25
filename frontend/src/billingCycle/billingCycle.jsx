import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Cycles de paiement" small="Enregistrement" />
        <Content>Cycles de paiement</Content>
      </div>
    );
  }
}

export default BillingCycle;
