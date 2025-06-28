function PropsExample({ name, age }) {
  return (
    <div>
      <h2>Props Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage example: <PropsExample name="Alice" age={28} />
export default PropsExample;
