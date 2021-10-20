import { Container } from "@/components/container"
import { LayoutPropTypes } from "@/types"

export const Layout: React.FC<LayoutPropTypes> = ({children, type}) => {
  switch (type) {
    default:
      return (
        <div>
          <Container>
            {children}
          </Container>
        </div>
      )
  }
}