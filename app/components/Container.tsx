import { PropsWithChildren } from "react"

const myClasses =  "whatever bg-red-500"

type ContainerProps = PropsWithChildren & {
  classes?: string
}

export const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return <div className={`container mx-auto px-4 ${classes}`}>{children}</div>
}