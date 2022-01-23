import {Component} from 'react'
import Icon from '../Icon'
import GameResultView from '../GameResultView'
import ReactPopUp from '../ReactPopUp'
import './index.css'

import {
  MainContainer,
  ScoreCard,
  Head,
  ScoreContainer,
  ChoiceContainer,
} from './styledComponents'

class Mainpage extends Component {
  state = {
    score: '0',
    computer: '',
    status: '',
    myselection: '',
  }

  userSelection = id => {
    const {choicesList} = this.props
    const len = choicesList.length
    console.log(id)
    const ran = Math.floor(Math.random() * len)
    if (id === choicesList[ran].id) {
      console.log('draw')
      this.setState({
        status: 'DRAW',
        computer: ran,
        myselection: id,
      })
    } else if (id === 'ROCK' && choicesList[ran].id === 'SCISSORS') {
      this.setState(prevState => ({
        status: 'WON',
        score: parseInt(prevState.score) + 1,
        computer: ran,
        myselection: id,
      }))
    } else if (id === 'SCISSORS' && choicesList[ran].id === 'PAPER') {
      this.setState(prevState => ({
        status: 'WON',
        score: parseInt(prevState.score) + 1,
        computer: ran,
        myselection: id,
      }))
    } else if (id === 'PAPER' && choicesList[ran].id === 'ROCK') {
      this.setState(prevState => ({
        status: 'WON',
        score: parseInt(prevState.score) + 1,
        computer: ran,
        myselection: id,
      }))
    } else {
      this.setState(prevState => ({
        status: 'LOSE',
        score: parseInt(prevState.score) - 1,
        computer: ran,
        myselection: id,
      }))
    }
  }

  resetFun = () => {
    this.setState(prevState => ({
      computer: '',
      status: '',
      score: prevState.score,
      myselection: '',
    }))
  }

  renderResult = () => {
    const {choicesList} = this.props
    const {status, computer, myselection} = this.state
    return (
      <GameResultView
        status={status}
        computer={computer}
        myselection={myselection}
        choicesList={choicesList}
        resetFun={this.resetFun}
      />
    )

    // console.log('i am in')
  }

  render() {
    const {status} = this.state
    let {score} = this.state
    score = String(score)
    console.log(status, score)
    const {choicesList} = this.props
    // console.log(choicesList)
    return (
      <MainContainer>
        <ScoreCard>
          <Head>Rock Paper Scissors</Head>
          <ScoreContainer>
            <p>Score</p>
            <p className="para">{score}</p>
          </ScoreContainer>
        </ScoreCard>
        {status === '' ? (
          <ChoiceContainer>
            {choicesList.map(eachItem => (
              <Icon
                eachItem={eachItem}
                userSelection={this.userSelection}
                Id={eachItem.id}
              />
            ))}
          </ChoiceContainer>
        ) : (
          this.renderResult()
        )}
        <ReactPopUp />
        {/* <Popup trigger={<RulesButton>"Rules"</RulesButton>} position="top left">
          <div className="pop-up">
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              className="image"
              alt="rules"
            />
          </div>
        </Popup> */}
      </MainContainer>
    )
  }
}
export default Mainpage
