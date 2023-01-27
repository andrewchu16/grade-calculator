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
    <div className="rounded-full bg-neutral-100 h-full">Assignment Input</div>
  )
}

function MarkCalculator({ setAverage }: markCalculatorProps) {
  const [assignments, setAssignments] = useState<Assignment[]>(
    Array(1).map(() => ({ mark: NaN, weight: NaN }))
  )

  const [assignmentInputs, setAssignmentInputs] = useState<
    React.ReactNode[] | null
  >(null)

  if (assignmentInputs === null) {
  }

  const sumMarks = assignments.reduce(
    (acc: number, curAssignment: Assignment) =>
      acc + (isNaN(curAssignment.mark) ? 0 : curAssignment.mark),
    0
  )
  const sumWeights = assignments.reduce(
    (acc: number, curAssignment: Assignment) =>
      acc + (isNaN(curAssignment.weight) ? 0 : curAssignment.weight),
    0
  )
  const average = sumWeights !== 0 ? sumMarks / sumWeights : 0
  setAverage(average)

  const updateAssignment = (assignment: Assignment, index: number) => {
    setAssignments(assignments.map((a, i) => (i === 0 ? assignment : a)))
  }

  return (
    <div className="bg-pink-300 rounded-lg px-3 py-2 gap-2 flex flex-col">
      <AssignmentInput
        assignment={assignments[0]}
        updateAssignment={(assignment) => updateAssignment(assignment, 0)}
      />
    </div>
  )
}

export default MarkCalculator
