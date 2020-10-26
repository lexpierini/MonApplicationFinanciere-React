import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import List from "./billingCycleList";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
  }

  render() {
    return (
      <div>
        <ContentHeader title="Cycles de Paiement" small="Enregistrement" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Liste" icon="bars" target="tabList" />
              <TabHeader label="Inclusion" icon="plus" target="tabCreate" />
              <TabHeader
                label="Modification"
                icon="pencil"
                target="tabUpdate"
              />
              <TabHeader label="Exclusion" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <h1>Inclusion</h1>
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Modification</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Exclusion</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
