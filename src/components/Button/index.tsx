import { Button } from 'react-bootstrap'

//import { useTheme } from '../../context/Context'

type propsTypes = {
  handleClick: (input: React.BaseSyntheticEvent) => void
  text: string
  color: string
  disabled: boolean
}
export default function ButtonComponent({
  handleClick,
  text,
  color,
  disabled,
}: propsTypes) {
  const style = {
    backgroundColor: color,
  }
  return (
    <>
      <Button onClick={handleClick} style={style} disabled={disabled}>
        {text}
      </Button>
    </>
  )
}
