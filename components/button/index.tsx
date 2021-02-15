const Button: React.FC<ButtonProps> = ({children}) => {

  return (
    <button className="p-4 bg-blue-600 rounded-md">{children}</button>
  )
}

export default Button

Button.defaultProps = {
  type: "primary"
}

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: "primary" | "secondary" | "danger";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  children: React.ReactNode
}
