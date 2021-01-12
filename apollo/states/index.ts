import { ReactiveVar, makeVar } from "@apollo/client"
import { States } from "../models"

const initialStates = {
  count: 0
}

export const statesVar: ReactiveVar<States> = makeVar<States>(initialStates)