import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state={
        track_list: []
    }
    render() {
        return (
         <context.Provider>
             {this.props.children}
         </context.Provider>
        )
    }
}
