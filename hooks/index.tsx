import { useState, useMemo } from "react"

export const useToggle = (): [boolean, any] => {
  const [toggle, setToggle] = useState(false)

  const handlers = useMemo(() => {
    return {
      off: () => setToggle(false),
      on: () => setToggle(true),
      handleToggle: () => setToggle(s => !s)
    }
  }, [])

  return [toggle, handlers]
}

export const useInput = (): [string, any] => {
  const [value, setValue] = useState("")

  const handlers = useMemo(() => {
    return {
      handleChange: (e) => setValue(e.target.value)
    }
  }, [])

  return [value, handlers]
}