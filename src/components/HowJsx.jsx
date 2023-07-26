import React, { Component } from "react";

const MyComponent = () => <h1>My Component</h1>;

class USE_JSX extends Component {
  render() {
    const obj = {
      title: "Test Title",
      id: "my-h1",
    };
    const name = "Md Mahfuzur Rahman Sajib"; //statement
    const bio = (
      <div>
        <h3>{name}</h3>
        <p>FullStack JavaScript Developer.</p>
      </div>
    );

    return (
      <div className="App">
        {bio}
        <div>
          <h1 title="I am title">List Some File...</h1>
          <p>My Name is {name}</p>
          <p>Lorem ipsum, dolor .</p>
          <p>Do Something ...</p>
          <p>{new Date().toISOString()}</p>
        </div>
        <h1 {...obj}>JSX How To Use.</h1>
        <MyComponent />
      </div>
    );
  }
}

export default USE_JSX;

//  <>
//     <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
//       itaque laboriosam ipsa.
//     </p>
//   </>
