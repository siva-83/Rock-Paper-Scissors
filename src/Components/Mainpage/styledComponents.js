import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;

  color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: transparent;
  border-style: none;
  width: 400px;
  justify-content: center;
`

export const ScoreCard = styled.div`
  background-color: transparent;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  width: 70vw;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px;
  border-radius: 10px;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  border-style: none;
  border-radius: 5px;
  margin-left: 600px;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
`
