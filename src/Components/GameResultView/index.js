import {
  ResultMainContainer,
  Choice,
  Image,
  ResultPart2,
  Head,
  Button,
} from './styledComponents'

const GameResultView = props => {
  const {status, computer, myselection, choicesList, resetFun} = props
  const myList = choicesList.filter(eachEle => myselection === eachEle.id)
  const opponentList = choicesList.filter(
    eachEl => choicesList[computer].id === eachEl.id,
  )
  console.log('state', status)
  console.log(myList)
  console.log(opponentList)
  console.log(myList[0].imageUrl)
  const myUrl = myList[0].imageUrl
  console.log('myurl', myUrl)

  const oppUrl = opponentList[0].imageUrl
  console.log('opp', computer)
  const reset = () => {
    resetFun()
  }
  return (
    <ResultMainContainer>
      <ResultPart2>
        <Choice>
          <Head>YOU</Head>
          <Image src={myUrl} alt="your choice" />
        </Choice>
        <Choice>
          <Head>OPPONENT</Head>
          <Image src={oppUrl} alt="opponent choice" />
        </Choice>
        {/* <Res>{status}</Res> */}
      </ResultPart2>
      <Head>YOU {status}</Head>
      <Button onClick={reset}>PLAY AGAIN</Button>
    </ResultMainContainer>
  )
}
export default GameResultView
