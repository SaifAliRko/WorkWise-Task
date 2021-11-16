import {  useState } from "react";
import Final from "./Final";
import FirstContact from "./FirstContact";
import Incoming from "./Incoming";
import SecondContact from "./SecondContact";
export default function Home() {
  const [candidates,setCandidates]=useState([
    {name:'Saif',id:0}
  ])
  const [firstArr,setfirstArr]=useState([])
  const [secondArr,setSecondArr]=useState([])
  const [final,setFinal]=useState([])

  const candidatesHandler=(val)=>{
    setCandidates(prev=>{
      return prev.concat([{name:val,id:(prev.at(-1).id)+1}])
    })
    // setCandidates(prev=>([...prev,{name:val,id:1}]))
    }
  const FirstContactHandler=(name)=>{
    if (!firstArr.includes(name))
    setfirstArr(prev=>[...prev,name])
  }
  const SecondContactHandler=(name)=>{
    if (!secondArr.includes(name))
    setSecondArr(prev=>[...prev,name])
  }
  const FinalHandler=(name)=>{
    if (!final.includes(name))
    setFinal(prev=>[...prev,name])
  }

  const clearCandidatesHandler=()=>{
    setCandidates([ {name:'',id:0}])
  }
  const firstArrHandler=()=>{
    setfirstArr([])
  }
  const secondArrHandler=()=>{
    setSecondArr([])
  }
  const finalArrHandler=()=>{
    setFinal([])
  }
  
  return (
    <div className='flex flex-wrap gap-20 w-full mx-auto my-12'>
      <Incoming 
        title="Incoming"
        candidates={candidates}
        candidatesHandler={candidatesHandler}
        FirstContactHandler={FirstContactHandler}
        clearCandidatesHandler={clearCandidatesHandler}
        />

      <FirstContact 
        title="First Contact"
        firstArr={firstArr}
        candidates={candidates}
        SecondContactHandler={SecondContactHandler}
        clearfirstArrHandler={firstArrHandler}
        />
      <SecondContact 
        title="Second Contact"
        secondArr={secondArr}
        FinalHandler={FinalHandler}
        clearsecondArrHandler={secondArrHandler}
        />
      <Final 
        title="Final"
        final={final}
        clearfinalArrHandler={finalArrHandler}
        />
      </div>
  );
}


