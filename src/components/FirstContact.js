import "../style/global.css";

export default function FirstContact({
  SecondContactHandler,
  firstArr,
  title,
  clearfirstArrHandler,
}) {
  return (
    <div
      className="flex-auto shadow-md   mx-auto bg-white rounded-xl border-solid border-2 border-gray-200 shadow-md overflow-hidden md:max-w-2xl   transition duration-200 ease-in-out 
  transform  hover:scale-105  hover:z-50"
    >
      <h3 className="title">{title}</h3>
      <div className="mt-3 border-t-2 shadow-sm">
        <div className="flex flex-col gap-2 mx-auto my-0 w-5/6 py-3">
          {firstArr.map((i, index) => (
            <div
              className="candidates text-center"
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {i}
              <button
                className="btn"
                onClick={() => {
                  SecondContactHandler(i);
                }}
              >
                Next
              </button>
            </div>
          ))}
        </div>
      </div>
      {firstArr.length !== 0 && (
        <div className="text-center my-3">
          <button
            onClick={() => {
              clearfirstArrHandler();
            }}
            className="btn bg-red-600 mx-auto w-20"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
