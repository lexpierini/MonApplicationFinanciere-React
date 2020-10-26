import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCycleActions";
import LabelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nom"
            cols="12 4"
            placeholder="Entrez le nom"
          />
          <Field
            name="month"
            component={LabelAndInput}
            type="number"
            readOnly={readOnly}
            label="Mois"
            cols="12 4"
            placeholder="Entrez le mois"
          />
          <Field
            name="year"
            component={LabelAndInput}
            type="number"
            readOnly={readOnly}
            label="Année"
            cols="12 4"
            placeholder="Entrez l'année"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Annuler
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false,
})(BillingCycleForm);
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
