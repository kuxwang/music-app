import * as React from 'react';

interface IScrollViewProps {
  children?: React.ReactNode | React.ReactNode[],
  scrollX?: boolean
  scrollY?: boolean
}

const geScrolltStyle = (props: IScrollViewProps) => {
  let obj:any = {
    display: 'flex',
    justifyContent: 'start',
  }
  if(props.scrollX){
    obj.overflowX = 'auto';
  }
  if(props.scrollY){
    obj.overflowY = 'auto';
    obj.flexDirection='column'
  }

  return obj
}

const ScrollView: React.FunctionComponent<IScrollViewProps> = (props) => {
  return <div style={geScrolltStyle(props)}>
    { props.children }
  </div>;
};

export default ScrollView;
