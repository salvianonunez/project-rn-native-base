import React from 'react';
import Icon from 'react-native-remix-icon';

interface RemixIconProps {
  name?: string;
  color?: string;
  size?: number | string;
  type: 'fill' | 'line';


}

const RemixIcon = (props:RemixIconProps) => {
  const {name, color, size, type} = props;
  return (
    <Icon 
    name={`${name}-${type}`}
    color={color}
    size={size}
    />
  );
};


export default RemixIcon