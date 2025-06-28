function ChildrenPropExample({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem" }}>
      <h2>Children Prop Example</h2>
      {children}
    </div>
  );
}

// Usage example:
// <ChildrenPropExample><p>Hello inside children!</p></ChildrenPropExample>

export default ChildrenPropExample;
