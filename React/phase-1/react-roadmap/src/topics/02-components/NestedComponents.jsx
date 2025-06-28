function Header() {
  return <h2>This is the Header</h2>;
}

function Body() {
  return <p>This is the Body content.</p>;
}

function Footer() {
  return <small>This is the Footer.</small>;
}

function NestedComponents() {
  return (
    <div>
      <h2>Nested Components</h2>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default NestedComponents;
