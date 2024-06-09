import "./App.css";
import Formula from "./Components/Formula";

function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen w-full flex items-center flex-col justify-center gap-5 ">
        <h1 className="text-center font-bold text-3xl">
          <span className="text-green-500">B</span>
          <span className="text-orange-400">M</span>
          <span className="text-red-500">I</span>
          &nbsp;Calculator
        </h1>
        <Formula />
      </div>
    </>
  );
}

export default App;
