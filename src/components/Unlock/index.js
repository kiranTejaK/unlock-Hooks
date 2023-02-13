import {useState} from 'react'
import {MainContainer, Heading, Image, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const onClickBtn = () => {
    setIsLocked(prevValue => !prevValue)
  }

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const alternateText = isLocked ? 'lock' : 'unlock'
  const btnText = isLocked ? 'Unlock' : 'Lock'
  const paraText = isLocked ? 'Locked' : 'Unlocked'

  return (
    <MainContainer>
      <Image src={imageUrl} alt={alternateText} />
      <Heading>{`Your Device is ${paraText} `}</Heading>
      <Button type="button" onClick={onClickBtn}>
        {btnText}
      </Button>
    </MainContainer>
  )
}

export default Unlock
