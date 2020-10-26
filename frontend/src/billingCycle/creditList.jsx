import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert } from "redux-form";
import Grid from "../common/layout/grid";
import Input from "../common/form/input";

class CreditList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", "credits", index, item);
    }
  }

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
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(index + 1)}
          >
            <i className="fa fa-plus"></i>
          </button>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert }, dispatch);
export default connect(null, mapDispatchToProps)(CreditList);
