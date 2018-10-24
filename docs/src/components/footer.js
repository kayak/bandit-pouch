/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { Grid, Row, Col } from 'react-bootstrap';

const GithubButton = ({ repo, type }) => (
  <span className="github-button-wrapper">
    <iframe
      title={type}
      src={`https://ghbtns.com/github-btn.html?user=kayak&repo=${repo}&type=${type}`}
      frameBorder="0"
      scrolling="0"
      width="60px"
      height="20px"
    />
  </span>
);

export default ({ name, version }) => (
  <footer
    style={{
      padding: '40px 0 20px',
      background: '#f8f8f8',
      borderTop: '1px solid #e7e7e7',
    }}
  >
    <Grid>
      <Row className="text-center">
        <Col xs={6} xsOffset={3}>
          <GithubButton
            repo={name}
            type="star"
          />
          <GithubButton
            repo={name}
            type="fork"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col xs={12} className="text-center">
          <p>
            Copyright
            &nbsp;
            {moment().format('YYYY')}
            &nbsp;
            KAYAK Germany, GmbH
          </p>
          <p>
            Licensed under the
            &nbsp;
            <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License Version 2.0</a>
            , Documentation built using
            &nbsp;
            <a href="https://gatsbyjs.org">Gatsby</a>
          </p>
          <p className="text-right">
            <small>{`v${version}`}</small>
          </p>
        </Col>
      </Row>
    </Grid>
  </footer>
);
