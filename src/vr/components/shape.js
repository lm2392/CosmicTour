import React, { Component } from 'react'

import {Box, Sphere, Cylinder } from 'react-vr'


const shapes = [Box, Sphere, Cylinder];

export default class Shape extends React.Component{
    render(){
        let Component = shapes[this.props.shapeNum];

        return(
         <Component 
         style={{
            color:'#fff',
            transform: this.props.transform    
         }}
         />
        )
    }
};