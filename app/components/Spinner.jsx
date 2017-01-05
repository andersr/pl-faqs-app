import React from 'react'
// import { Grid, Row, Col } from 'react-bootstrap'
import Loading from 'react-loading-animation'

const Spinner = () =>(
  <div style={{ textAlign: 'center', padding: '50px'}}><Loading /></div>
)

export default Spinner

//
// <Grid>
//   <Row className="show-grid">
//     <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
//     <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//   </Row>
