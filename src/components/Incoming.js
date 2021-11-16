import { useState } from "react";
export default function Incoming({
  clearCandidatesHandler,
  FirstContactHandler,
  candidatesHandler,
  title,
  candidates,
}) {
  const [enteredCan, setEnteredCan] = useState("");
  return (
    <div
      className=" flex-auto  w-50 mx-auto bg-white border-solid border-2 border-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl   transition duration-200 ease-in-out 
    transform  hover:scale-105  hover:z-50"
    >
      <h3 className="title">{title}</h3>
      <div className="mt-3 border-t-2 shadow-sm">
        <div className="flex flex-col gap-2 mx-auto my-0 w-5/6 py-3">
          {candidates.map((i, index) => (
            <div
              className="candidates text-center"
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {i.name}
              {i.name && (
                <button
                  className="btn"
                  onClick={() => {
                    FirstContactHandler(i.name);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-5/6 justify-between mx-auto my-5 ">
        <input
          placeholder="Enter Candidates Name"
          className="w-full box border shadow- py-2 ring-0  outline-none h-8 text-grey-darkest focus:border-none focus:outline-none "
          type="text"
          onChange={(e) => {
            setEnteredCan(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              candidatesHandler(enteredCan);
              setEnteredCan("");
            }
          }}
          value={enteredCan}
        />
        <button
          className="btn"
          onClick={() => {
            if (enteredCan!=='') {
              candidatesHandler(enteredCan);
              setEnteredCan("");
            }
          }}
        >
          +
        </button>
      </div>

      {candidates.length !== 0 && (
        <div className="text-center my-3">
          <button onClick={clearCandidatesHandler} className="btn bg-red-600 mx-auto w-20">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
