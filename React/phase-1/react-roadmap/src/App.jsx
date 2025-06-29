import { useState } from 'react'
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

function App() {
  return (
    <>
      <WhyReact />
      <VirtualDOM />
      <DeclarativeVsImperative/>
      <SPAConcept/>
      <CRAorViteSetup/>
      <FileStructure/>
      <JSXBasics/>
      <JSXExpressions/>

      <SimpleComponent/>
      <ReturningJSX/>
      <PropsExample name="Alice" age ={21}/>
      <ChildrenPropExample><p>Hello inside children!</p></ChildrenPropExample>

      <ClassComponentDemo/>

      <ReusableButton text="Click me" onClick={() => alert('Clicked!')} />
      <NestedComponents/>
      <SmartDumbExample/>  

      <BasicState/>
      <MultipleStates/>
      <ObjectArrayState/>
      <FunctionalUpdate/>

      <PropsVsState/>
      <ControlledInput/>

      <LiftingStateUp/>

      <BasicEffect/>
      <EffectDependencies/>
      <CleanupEffect/>
      <LifecycleEquivalents/>

      <FetchData/>
      <ResizeListener/>
      <TimerInterval/>

      <ControlledForm/>
      <ControlledEvents/>
      <UncontrolledForm/>

      <DynamicList/>
      <ListWithKeys/>
    </>
  )
}

export default App
