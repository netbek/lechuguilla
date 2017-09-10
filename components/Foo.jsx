import React from 'react';

class Foo extends React.Component {
  render() {
    const {foo, woz} = this.props;

    return (
      <span data-foo={foo}>
        {woz.map(function(val) {
          return <span key={val}>{val}</span>
        })}
      </span>
    );
  }
}

export default Foo;
