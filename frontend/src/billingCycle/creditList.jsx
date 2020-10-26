import React, { Component } from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/grid";
import Input from "../common/form/input";

class CreditList extends Component {
  renderRows() {
    const list = this.props.list || [];

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${this.props.field}[${index}].name`}
            component={Input}
            placeholder="Entrez le nom"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${this.props.field}[${index}].value`}
            component={Input}
            placeholder="Entrez la valeur"
            readOnly={this.props.readOnly}
          />
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
