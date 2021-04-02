import React from "react"
import Input from "../../input"

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div>
        <div className="bg-white p-6 rounded-lg border-b border-gray-200 shadow">
          <form>
            <div>
              <Input/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login