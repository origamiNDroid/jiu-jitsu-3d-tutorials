import React, {useEffect} from 'react'
import Graph from '../components/Graph';
import ReactFlow, { ReactFlowProvider, Controls, useNodesState, useEdgesState } from 'react-flow-renderer';
import '../assets/css/technique-style.css';
// import '../components/animations/animation';

import { Container } from '@mui/material';
import { Grid } from '@mui/material';

function Techniques() {


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Container fixed>

            <ReactFlowProvider>
              <Graph />
            </ReactFlowProvider>
          </Container>

        </Grid>

        <Grid item xs={1}>
          <Container fixed>

          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Techniques;