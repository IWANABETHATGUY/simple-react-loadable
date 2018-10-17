import React from 'react';

const convert = (component) => {
  if (typeof component === 'object' && component !== null) {
    return () => {
      return (
      <React.Fragment>
        {component}
      </React.Fragment>
      )
    }
  }
  return component;
}
const Loadable = (options) => {
  const Loader = options.loader;
  const Loading = options.loading;
  console.log(Loading);
  const PlaceHolder = convert(Loading);
  return class LoadableComponent extends React.Component {
    state = {
      loadingStatus: true,
      Component: null
    }
    componentDidMount() {
      setTimeout(() => {
        this.loadComponent();
      }, 1000)
    }
    loadComponent = () => {
      Loader().then(component => {
        this.setState({
          loadingStatus: false,
          Component: component.default
        })
      })
    }
    render() {
      let props = this.props;
      let { loadingStatus, Component } = this.state;
      return loadingStatus ? <PlaceHolder/>: <Component {...props}/>
    }
    
  }
}

export default Loadable;