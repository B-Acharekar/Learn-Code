import React from 'react'
// Child component receives props from parent
function Greeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}

function PropsVsState() {
  const [userName, setUserName] = React.useState("Guest");

  return (
    <div>
      <h2>Props vs State</h2>
      <input
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Greeting name={userName} />
    </div>
  );
}

export default PropsVsState;
