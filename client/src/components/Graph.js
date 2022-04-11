import ReactFlow, { ReactFlowProvider, Controls, useNodesState, useEdgesState } from 'react-flow-renderer';
import React, { useState, Component } from 'react'

import nodes from './nodes';
import edges from './edges';

const Graph = () => {

    return(
      <div className='providerFlow'>
        <ReactFlowProvider>
          <div className='reactflow-wrapper'>
          <ReactFlow nodes={nodes} edges={edges}
            nodesDraggable={false} >
            <Controls />
          </ReactFlow>

          </div>
        </ReactFlowProvider>
      </div>
    );
}

export default Graph