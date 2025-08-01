import { calculateAge, formatName } from "../utils/formmatters";




interface Student {
  id?:number;
  fullName:string;
  dob:string;
  score:number;
}

interface Props {
  student:Student;
}


const StudentCard:React.FC<Props> = ({student}) => {
  return (
    <div>
      <h2>Name: { formatName(student.fullName)} </h2>
      <p>DOb :{student.dob}</p>
      <p>Age:{calculateAge(student.dob)}</p>
       <p>Score : {student.score}</p>

    </div>
  )
}

export default StudentCard