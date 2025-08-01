import StudentCard from "./components/StudentCard"


function App() {

  const student1 = {
    fullName: 'ayoola ojo',
    dob: '12-05-2007',
    score:92
  }

  const student2 = {
    fullName: 'goodness ayomide',
    dob: '08-29-2008',
    score:94,
  }

  const student3 = {
    fullName: 'mercy adeboye',
    dob: '07-06-2010',
    score:94,
  }
  return (
    <>
      <StudentCard  student = {student1}/>
      <StudentCard  student = {student2}/>
      <StudentCard  student = {student3}/>

      
    </>
  )
}

export default App
