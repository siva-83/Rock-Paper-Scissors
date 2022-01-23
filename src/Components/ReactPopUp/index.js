import Popup from 'reactjs-popup'
import {RulesButton} from './styledComponents'

const ReactPopUp = () => (
  <Popup trigger={<RulesButton>Rules</RulesButton>} position="top left">
    <div className="pop-up">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        className="image"
        alt="rules"
      />
    </div>
  </Popup>
)
export default ReactPopUp
