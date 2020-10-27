import React, { Component } from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debt }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Résumé</legend>
      <Row>
        <ValueBox
          cols="12 4"
          color="green"
          icon="bank"
          value={`CAD$ ${credit}`}
          text="Total des Crédits"
        />
        <ValueBox
          cols="12 4"
          color="red"
          icon="credit-card"
          value={`CAD$ ${debt}`}
          text="Total des Débits"
        />
        <ValueBox
          cols="12 4"
          color="blue"
          icon="money"
          value={`CAD$ ${credit - debt}`}
          text="Valeur Consolidée"
        />
      </Row>
    </fieldset>
  </Grid>
);
