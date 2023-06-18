import { useReducer } from "react";

const reducer = () => {};

function Analytics() {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <main className="flex flex-col items-center w-full flex-grow">
      <h1 className="text-2xl font-bold">Analytics</h1>
    </main>
  );
}

export default Analytics;
