import './App.css'
// import { DefaultRenderingBeheviorAndProps } from './components/concepts/DefaultRenderingBeheviorAndProps'
import UseEffectWorking from './components/concepts/UseEffectWorking'
export interface dataType{
  name:string,
  email:string
}
function App() {
  // const data:dataType={
  //   name:'developer208',
  //   email:'it.developer2002@gmail.com'
  // }

  return (
    <>
    {/* <DefaultRenderingBeheviorAndProps name={data.name} email={data.email} /> */}
    <UseEffectWorking/>
    </>
  )
}

export default App
