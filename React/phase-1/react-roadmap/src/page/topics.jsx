import { Link } from 'react-router-dom';

export default function Topics() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* 01 - Basics */}
      <Link to="/why-react">Why React</Link>
      <Link to="/virtual-dom">Virtual DOM</Link>
      <Link to="/declarative-vs-imperative">Declarative vs Imperative</Link>
      <Link to="/spa-concept">SPA Concept</Link>
      <Link to="/cra-or-vite-setup">CRA or Vite Setup</Link>
      <Link to="/file-structure">File Structure</Link>
      <Link to="/jsx-basics">JSX Basics</Link>
      <Link to="/jsx-expressions">JSX Expressions</Link>

      {/* 02 - Components */}
      <Link to="/simple-component">Simple Component</Link>
      <Link to="/returning-jsx">Returning JSX</Link>
      <Link to="/props-example">Props Example</Link>
      <Link to="/children-prop-example">Children Prop Example</Link>
      <Link to="/class-component-demo">Class Component Demo</Link>
      <Link to="/reusable-button">Reusable Button</Link>
      <Link to="/nested-components">Nested Components</Link>
      <Link to="/smart-dumb-example">Smart vs Dumb Components</Link>

      {/* 03 - State */}
      <Link to="/basic-state">Basic State</Link>
      <Link to="/multiple-states">Multiple States</Link>
      <Link to="/object-array-state">Object/Array State</Link>
      <Link to="/functional-update">Functional Update</Link>
      <Link to="/props-vs-state">Props vs State</Link>
      <Link to="/controlled-input">Controlled Input</Link>
      <Link to="/lifting-state-up">Lifting State Up</Link>

      {/* 04 - useEffect */}
      <Link to="/basic-effect">Basic useEffect</Link>
      <Link to="/cleanup-effect">Cleanup Effect</Link>
      <Link to="/effect-dependencies">Effect Dependencies</Link>
      <Link to="/lifecycle-equivalents">Lifecycle Equivalents</Link>
      <Link to="/fetch-data">Fetch Data</Link>
      <Link to="/resize-listener">Resize Listener</Link>
      <Link to="/timer-interval">Timer Interval</Link>

      {/* 05 - Forms */}
      <Link to="/controlled-form">Controlled Form</Link>
      <Link to="/controlled-events">Controlled Events</Link>
      <Link to="/uncontrolled-form">Uncontrolled Form</Link>

      {/* 06 - Lists */}
      <Link to="/dynamic-list">Dynamic List</Link>
      <Link to="/list-with-keys">List With Keys</Link>

      {/* 07 - Conditional Rendering */}
      <Link to="/conditional-example">Conditional Example</Link>

      {/* 08 - Hooks */}
      <Link to="/use-ref">useRef Example</Link>
      <Link to="/use-memo">useMemo Example</Link>
      <Link to="/use-callback">useCallback Example</Link>
      <Link to="/use-context">useContext Example</Link>
      <Link to="/use-reducer">useReducer Example</Link>

      {/* 09 - Custom Hooks */}
      <Link to="/counter-app">Counter App</Link>
      <Link to="/user-list">User List</Link>

      {/* 10 - Performance */}
      <Link to="/child-memo">Child Memo</Link>
      <Link to="/performance-example">Performance Example</Link>

      {/* 11 - React Router */}
      <Link to="/home">🏠 Home</Link>
      <Link to="/about">ℹ️ About</Link>
      <Link to="/profile/john">👤 Profile: John</Link>
      <Link to="/user/details">User Details</Link>
    </div>
  );
}
