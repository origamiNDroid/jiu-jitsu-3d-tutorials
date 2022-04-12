import ReactFlow, { Background, Controls,  useNodesState, useEdgesState } from 'react-flow-renderer';
import React, { useState, Component } from 'react'

import nodes from './nodes';
import edges from './edges';

const graphStyles = { width: '60%', height: '500px'}
const Graph = () => {


    return(
        <div className='reactflow-wrapper' >
          <ReactFlow nodes={nodes} edges={edges}
            nodesDraggable={false} style={graphStyles}>
            
            <Controls />
            
            <Background color='black' gap={16} 
              style={{backgroundColor: 'white'}}/>
          </ReactFlow>
        </div>
    );
}

export default Graph