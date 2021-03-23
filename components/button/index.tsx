const typeClasses = (type) => {
  switch(type) {
    case "default":
      return "bg-white border border-gray-200 hover:bg-gray-100"
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700"
    default:
      return null
  }
}

const sizeClasses = (size) => {
  switch(size) {
    case "lg":
      return "py-4 px-8"
    case "md":
      return "py-2 px-4"
    case "sm":
      return "py1 px-2"
    default:
      return null
  }
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, size, children, className } = props
  const defaultClass = "rounded-lg transition-all"

  return (
    <button className={[defaultClass, sizeClasses(size), typeClasses(type), className].join(" ")}>{children}</button>
  )
}

export default Button

Button.defaultProps = {
  type: "primary",
  size: "md"
}

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: "default" | "primary" | "secondary" | "danger";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  children: React.ReactNode,
  className?: string,
}
