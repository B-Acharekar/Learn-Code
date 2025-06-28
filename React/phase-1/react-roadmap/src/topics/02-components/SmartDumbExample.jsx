// 🔹 Dumb (Presentational) Component
function UserCard({ name, onGreet }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: "1rem", marginBottom: "1rem" }}>
      <h3>Hello, {name}!</h3>
      <button onClick={onGreet}>Greet</button>
    </div>
  );
}

// 🔹 Smart (Container) Component
function SmartDumbExample() {
  const handleGreet = () => {
    alert("Greetings from the Smart component!");
  };

  return (
    <div>
      <h2>Smart vs Dumb Components</h2>
      <UserCard name="Alice" onGreet={handleGreet} />
      <UserCard name="Bob" onGreet={handleGreet} />
    </div>
  );
}

export default SmartDumbExample;
