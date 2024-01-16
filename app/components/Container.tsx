import { PropsWithChildren } from "react"

type ContainerProps = PropsWithChildren & {
  classes?: string
}

export const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return <div className={`container mx-auto px-8 ${classes}`}>{children}</div>
}