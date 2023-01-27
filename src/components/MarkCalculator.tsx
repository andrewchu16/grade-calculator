import React, { useState } from "react"

interface Assignment {
  mark: number
  weight: number
}

type markCalculatorProps = {
  setAverage: React.Dispatch<React.SetStateAction<number | undefined>>
}
type assignmentInputProps = {
  assignment: Assignment
  updateAssignment: (assignment: Assignment) => void
}

function AssignmentInput({
  assignment,
  updateAssignment,
}: assignmentInputProps) {
  return (
    <div className="rounded-full bg-pink-300 h-full p-3 gap-2 flex justify-end">
      <input
        className="text-lg rounded-full px-2 py-1 w-28"
        type="number"
        placeholder="Mark"
        onChange={(e) =>
          updateAssignment({ ...assignment, mark: parseFloat(e.target.value) })
        }
      />
      <input
        className="text-lg rounded-full px-2 py-1 w-28"
        type="number"
        placeholder="Weight"
        onChange={(e) =>
          updateAssignment({
            ...assignment,
            weight: parseFloat(e.target.value),
          })
        }
      />
    </div>
  )
}

function MarkCalculator({ setAverage }: markCalculatorProps) {
  const [assignments, setAssignments] = useState<Assignment[]>(
    Array.from({ length: 4 }, () => ({ mark: NaN, weight: NaN }))
  )

  const assignmentInputs = Array.from(
    { length: assignments.length },
    (_v, k) => (
      <AssignmentInput
        assignment={assignments[k]}
        updateAssignment={(assignment) => updateAssignment(assignment, k)}
        key={k}
      />
    )
  )

  const updateAssignment = (assignment: Assignment, index: number) => {
    // Update assignment
    const newAssignments: Assignment[] = assignments.map((a, i) =>
      i === index ? assignment : a
    )
    setAssignments(newAssignments)

    // Calculate average
    const sumMarks = newAssignments.reduce(
      (acc: number, curAssignment: Assignment) =>
        acc +
        (!isNaN(curAssignment.mark) && !isNaN(curAssignment.weight)
          ? curAssignment.mark * curAssignment.weight
          : 0),
      0
    )
    const sumWeights = newAssignments.reduce(
      (acc: number, curAssignment: Assignment) =>
        acc + (isNaN(curAssignment.weight) ? 0 : curAssignment.weight),
      0
    )
    setAverage(sumWeights !== 0 ? sumMarks / sumWeights : 0)
  }

  return (
    <div className="bg-pink-200 rounded-xl p-4 gap-3 flex flex-col">
      {assignmentInputs}
    </div>
  )
}

export default MarkCalculator
