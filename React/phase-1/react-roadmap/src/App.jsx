import { Routes, Route } from 'react-router-dom';

import './App.css'

import WhyReact from './topics/01-basics/WhyReact'
import VirtualDOM from './topics/01-basics/VirtualDOM'
import DeclarativeVsImperative from './topics/01-basics/DeclarativeVsImperative'
import SPAConcept from './topics/01-basics/SPAConcept'
import CRAorViteSetup from './topics/01-basics/CRAorViteSetup'
import FileStructure from './topics/01-basics/FileStructure'
import JSXBasics from './topics/01-basics/JSXBasics'
import JSXExpressions from './topics/01-basics/JSXExpressions'
import SimpleComponent from './topics/02-components/SimpleComponent'
import ReturningJSX from './topics/02-components/ReturningJSX'
import PropsExample from './topics/02-components/PropsExample'
import ChildrenPropExample from './topics/02-components/ChildrenPropExample'
import ClassComponentDemo from './topics/02-components/ClassComponentDemo'
import ReusableButton from './topics/02-components/ReusableButton'
import NestedComponents from './topics/02-components/NestedComponents'
import SmartDumbExample from './topics/02-components/SmartDumbExample'
import BasicState from './topics/03-state/BasicState'
import MultipleStates from './topics/03-state/MultipleStates'
import ObjectArrayState from './topics/03-state/ObjectArrayState'
import FunctionalUpdate from './topics/03-state/FunctionalUpdate'
import PropsVsState from './topics/03-state/PropsVsState'
import ControlledInput from './topics/03-state/ControlledInput'
import LiftingStateUp from './topics/03-state/LiftingStateUp'
import BasicEffect from './topics/04-useEffect/BasicEffect'
import CleanupEffect from './topics/04-useEffect/CleanupEffect'
import EffectDependencies from './topics/04-useEffect/EffectDependencies'
import LifecycleEquivalents from './topics/04-useEffect/LifecycleEquivalents'
import FetchData from './topics/04-useEffect/FetchData'
import ResizeListener from './topics/04-useEffect/ResizeListener'
import TimerInterval from './topics/04-useEffect/TimerInterval'
import ControlledForm from './topics/05-forms/ControlledForm'
import ControlledEvents from './topics/05-forms/ControlledEvents'
import UncontrolledForm from './topics/05-forms/UncontrolledForm'
import DynamicList from './topics/06-lists/DynamicList'
import ListWithKeys from './topics/06-lists/ListWithKeys'
import ConditionalExample from './topics/07-conditional-rendering/ConditionalExample'
import UseRefExample from './topics/08-hooks/UseRefExample'
import UseMemoExample from './topics/08-hooks/UseMemoExample'
import UseCallbackExample from './topics/08-hooks/UseCallbackExample'
import UseContextExample from './topics/08-hooks/UseContextExample'
import UseReducerExample from './topics/08-hooks/UseReducerExample'
import CounterApp from './topics/09-custom-hooks/counterApp'
import UserList from './topics/09-custom-hooks/UserList'
import ChildMemo from './topics/10-performance/ChildMemo'
import PerformanceExample from './topics/10-performance/PerformanceExample'
import Topics from './page/topics.jsx';
import Home from './topics/11-router/Home.jsx';
import About from './topics/11-router/About.jsx';
import Profile from './topics/11-router/Profile.jsx';
import UserDetails from './topics/11-router/UserDetails.jsx';


function App() {
  return (
    <>
        <Routes>

          {/* 01 - Basics */}
          <Route path="/why-react" element={<WhyReact />} />
          <Route path="/virtual-dom" element={<VirtualDOM />} />
          <Route path="/declarative-vs-imperative" element={<DeclarativeVsImperative />} />
          <Route path="/spa-concept" element={<SPAConcept />} />
          <Route path="/cra-or-vite-setup" element={<CRAorViteSetup />} />
          <Route path="/file-structure" element={<FileStructure />} />
          <Route path="/jsx-basics" element={<JSXBasics />} />
          <Route path="/jsx-expressions" element={<JSXExpressions />} />

          {/* 02 - Components */}
          <Route path="/simple-component" element={<SimpleComponent />} />
          <Route path="/returning-jsx" element={<ReturningJSX />} />
          <Route path="/props-example" element={<PropsExample name="Alice" age={21} />} />
          <Route path="/children-prop-example" element={<ChildrenPropExample><p>Hello inside children!</p></ChildrenPropExample>} />
          <Route path="/class-component-demo" element={<ClassComponentDemo />} />
          <Route path="/reusable-button" element={<ReusableButton text="Click me" onClick={() => alert('Clicked!')} />} />
          <Route path="/nested-components" element={<NestedComponents />} />
          <Route path="/smart-dumb-example" element={<SmartDumbExample />} />

          {/* 03 - State */}
          <Route path="/basic-state" element={<BasicState />} />
          <Route path="/multiple-states" element={<MultipleStates />} />
          <Route path="/object-array-state" element={<ObjectArrayState />} />
          <Route path="/functional-update" element={<FunctionalUpdate />} />
          <Route path="/props-vs-state" element={<PropsVsState />} />
          <Route path="/controlled-input" element={<ControlledInput />} />
          <Route path="/lifting-state-up" element={<LiftingStateUp />} />

          {/* 04 - useEffect */}
          <Route path="/basic-effect" element={<BasicEffect />} />
          <Route path="/cleanup-effect" element={<CleanupEffect />} />
          <Route path="/effect-dependencies" element={<EffectDependencies />} />
          <Route path="/lifecycle-equivalents" element={<LifecycleEquivalents />} />
          <Route path="/fetch-data" element={<FetchData />} />
          <Route path="/resize-listener" element={<ResizeListener />} />
          <Route path="/timer-interval" element={<TimerInterval />} />

          {/* 05 - Forms */}
          <Route path="/controlled-form" element={<ControlledForm />} />
          <Route path="/controlled-events" element={<ControlledEvents />} />
          <Route path="/uncontrolled-form" element={<UncontrolledForm />} />

          {/* 06 - Lists */}
          <Route path="/dynamic-list" element={<DynamicList />} />
          <Route path="/list-with-keys" element={<ListWithKeys />} />

          {/* 07 - Conditional Rendering */}
          <Route path="/conditional-example" element={<ConditionalExample />} />

          {/* 08 - Hooks */}
          <Route path="/use-ref" element={<UseRefExample />} />
          <Route path="/use-memo" element={<UseMemoExample />} />
          <Route path="/use-callback" element={<UseCallbackExample />} />
          <Route path="/use-context" element={<UseContextExample />} />
          <Route path="/use-reducer" element={<UseReducerExample />} />

          {/* 09 - Custom Hooks */}
          <Route path="/counter-app" element={<CounterApp />} />
          <Route path="/user-list" element={<UserList />} />

          {/* 10 - Performance */}
          <Route path="/child-memo" element={<ChildMemo />} />
          <Route path="/performance-example" element={<PerformanceExample />} />

          {/* 11 - React Router */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/user/details" element={<UserDetails />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
    </>
  );
}

export default App;
