import React, { Component } from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/grid";

class CreditList extends Component {
  renderRows() {
    const list = this.props.list || [];

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field name="credits[0].name" component={Input} />
        </td>
        <td>
          <Field name="credits[0].value" component={Input} />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Crédits</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Valeur</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Actions</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

export default CreditList;
