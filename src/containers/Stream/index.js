import React from "react";
import { withAuthorization } from "../../providers/session";
import Layout from "../../components/layout";
import StreamContent from "../../components/StreamContent";

const Stream = () => (
    <Layout>
      <StreamContent />
    </Layout>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Stream);
