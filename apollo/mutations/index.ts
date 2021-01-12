import { statesVar } from "../states"

export const increase = () => {
  const states = statesVar()
  statesVar({...states, count: states.count + 1})
}
