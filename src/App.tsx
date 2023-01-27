import { SetStateAction, useState } from 'react'
import MarkCalculator from './components/MarkCalculator';

function App() {
  const [average, setAverage] = useState<number | undefined>();

  return (
    <div className="flex gap-4 flex-col mx-8">
      <h1 className="text-2xl text-center">Grade Calculator</h1>
      <div>
        <MarkCalculator setAverage={setAverage} />
      </div>
    </div>
  )
}

export default App
