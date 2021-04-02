import React from "react"

export type PropTypes = {
  placeholder?: string
}

const Input: React.FC<PropTypes> = (props) => {
  const { ...rest } = props
  return (
    <div>
      <input type="text" placeholder="Username" className="border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-400" {...rest}/>
    </div>
  )
}

export default Input

Input.defaultProps = {
}