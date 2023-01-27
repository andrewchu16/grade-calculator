import { useState } from "react"
import MarkCalculator from "./components/MarkCalculator"

function App() {
  const [average, setAverage] = useState<number | undefined>()

  return (
    <div className="flex gap-4 flex-col mx-8">
      <h1 className="text-3xl text-center">Grade Calculator</h1>
      <div>
        <h2 className="text-xl mb-1">
          {average !== undefined
            ? `Your average is ${average.toFixed(2)}%`
            : "Calculating..."}{" "}
        </h2>
        <MarkCalculator setAverage={setAverage} />
      </div>
    </div>
  )
}

export default App
