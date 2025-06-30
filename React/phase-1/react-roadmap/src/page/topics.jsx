import { Link } from 'react-router-dom';

export default function Topics() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      {/* Section Component */}
      {[
        {
          title: "01 - Basics",
          links: [
            ["Why React", "/why-react"],
            ["Virtual DOM", "/virtual-dom"],
            ["Declarative vs Imperative", "/declarative-vs-imperative"],
            ["SPA Concept", "/spa-concept"],
            ["CRA or Vite Setup", "/cra-or-vite-setup"],
            ["File Structure", "/file-structure"],
            ["JSX Basics", "/jsx-basics"],
            ["JSX Expressions", "/jsx-expressions"],
          ],
        },
        {
          title: "02 - Components",
          links: [
            ["Simple Component", "/simple-component"],
            ["Returning JSX", "/returning-jsx"],
            ["Props Example", "/props-example"],
            ["Children Prop Example", "/children-prop-example"],
            ["Class Component Demo", "/class-component-demo"],
            ["Reusable Button", "/reusable-button"],
            ["Nested Components", "/nested-components"],
            ["Smart vs Dumb Components", "/smart-dumb-example"],
          ],
        },
        {
          title: "03 - State",
          links: [
            ["Basic State", "/basic-state"],
            ["Multiple States", "/multiple-states"],
            ["Object/Array State", "/object-array-state"],
            ["Functional Update", "/functional-update"],
            ["Props vs State", "/props-vs-state"],
            ["Controlled Input", "/controlled-input"],
            ["Lifting State Up", "/lifting-state-up"],
          ],
        },
        {
          title: "04 - useEffect",
          links: [
            ["Basic useEffect", "/basic-effect"],
            ["Cleanup Effect", "/cleanup-effect"],
            ["Effect Dependencies", "/effect-dependencies"],
            ["Lifecycle Equivalents", "/lifecycle-equivalents"],
            ["Fetch Data", "/fetch-data"],
            ["Resize Listener", "/resize-listener"],
            ["Timer Interval", "/timer-interval"],
          ],
        },
        {
          title: "05 - Forms",
          links: [
            ["Controlled Form", "/controlled-form"],
            ["Controlled Events", "/controlled-events"],
            ["Uncontrolled Form", "/uncontrolled-form"],
          ],
        },
        {
          title: "06 - Lists",
          links: [
            ["Dynamic List", "/dynamic-list"],
            ["List With Keys", "/list-with-keys"],
          ],
        },
        {
          title: "07 - Conditional Rendering",
          links: [["Conditional Example", "/conditional-example"]],
        },
        {
          title: "08 - Hooks",
          links: [
            ["useRef Example", "/use-ref"],
            ["useMemo Example", "/use-memo"],
            ["useCallback Example", "/use-callback"],
            ["useContext Example", "/use-context"],
            ["useReducer Example", "/use-reducer"],
          ],
        },
        {
          title: "09 - Custom Hooks",
          links: [
            ["Counter App", "/counter-app"],
            ["User List", "/user-list"],
          ],
        },
        {
          title: "10 - Performance",
          links: [
            ["Child Memo", "/child-memo"],
            ["Performance Example", "/performance-example"],
          ],
        },
        {
          title: "11 - React Router",
          links: [
            ["🏠 Home", "/home"],
            ["ℹ️ About", "/about"],
            ["👤 Profile: John", "/profile/john"],
            ["User Details", "/user/details"],
          ],
        },
        {
          title: "12 - API",
          links: [["User Fetch", "/api/users-fetch"]],
        },
        {
          title: "13 - Styling in React",
          links: [["Test Tailwind", "/test/tailwind"]],
        },
      ].map(({ title, links }) => (
        <div key={title}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {links.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="block px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
