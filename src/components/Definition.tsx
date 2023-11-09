
type DefinitionProps = {
    text: string
}

const Definition = ({text}:DefinitionProps) => {
  return (
    <li>
        <p className=' m-[20px]'>{text}</p>
    </li>
  )
}

export default Definition