import React from 'react';
import {Tree} from 'react-d3-tree';
import jdata from './data.json';
const svg={
  fill: 'none',
	  stroke: 'rgb(100, 124, 128)',
    strokeWidth: '2px'
  
  
}

const nodeCircle={
  fill: 'teal',
  stroke: 'teal',
  strokeWidth: '3px'
}
const nodeCircle_child={
  fill: 'lightsteelblue',
  stroke: 'lightsteelblue',
  strokeWidth: '3px'
}
const nodeName={
  font: '12px sans-serif',
  
  textAnchor:'start',
  fillOpacity:'1e-6',
  dy:'.35em'
  ,x:10
}
const nodeNameChild={
  font: '12px sans-serif',
  
  textAnchor:'end',
  fillOpacity:'1e-6',
  dy:'.35em'
  ,
  x:-10
}
const nodeAttribute={
  cursor: 'pointer',

}
const nodeAttributeChild={
  cursor: 'pointer',
 
}
const kk={
  
    links: svg,
    nodes: {
      node: {
        circle: nodeCircle,
        name: nodeName,
        attributes: nodeAttribute,
      },
      leafNode: {
        circle:nodeCircle_child,
        name: nodeNameChild,
        attributes: nodeAttributeChild
      },
    },
  }

class Try extends React.Component{
  state={
    a:[],
  
  }

    componentWillMount(){
      this.setState({
       a:jdata
      });
    };

  render() {

    return (
     
     <div style={{
backgroundImage:'./im.jpg',
     height:'400em', 
   //  width: '700px',
     border: '15px',
     padding: '50px',
     margin: '20px',
     viewBox:'autoBox',
   
    }}>  <Tree
     
     scaleExtent={{min: 0.1, max: 1}}
     depthFactor={250}
     translate={{x:70,y:350}}
      data={this.state.a}
      shouldCollapseNeighborNodes={true}
      collapsible={true}
     zoomable={true}
     useCollapseData={true}
     pathFunc={'straight'}
   //  orientation={"vertical"}
    transitionDuration={200}
    separation={{siblings: .3, nonSiblings: 1}}
styles={
  kk
}
  />

</div> );
    //here we can write any java script to be displayed in the web page

}
}

export default Try;
