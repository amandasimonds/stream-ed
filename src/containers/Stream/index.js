import React from "react";
import Aux from "../../hoc";
import { withAuthorization } from "../../providers/session";
import Layout from "../../components/layout";
import StreamContent from "../../components/StreamContent";

const Stream = () => (
  <Aux>
    <Layout>
      <StreamContent />
    </Layout>
  </Aux>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Stream);
