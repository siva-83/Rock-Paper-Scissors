import {IconButton, Image} from './styledComponents'

const Icon = props => {
  const {eachItem, userSelection, Id} = props
  let test
  if (Id === 'ROCK') {
    test = 'rockButton'
  } else if (Id === 'SCISSORS') {
    test = 'scissorsButton'
  } else {
    test = 'paperButton'
  }
  const send = () => {
    userSelection(Id)
  }
  return (
    <IconButton data-testId={test}>
      <Image src={eachItem.imageUrl} onClick={send} alt={Id} />
    </IconButton>
  )
}

export default Icon
