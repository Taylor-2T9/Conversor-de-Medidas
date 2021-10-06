import React from 'react'
import ConverterArea from './ConverterArea'
import Header from './Header'
import * as Styles from './styles'

function App() {
  const [chosenMeasure, setChosenMeasure] = React.useState()
  return (
    <Styles.Container>
      <Header chosenMeasure={chosenMeasure} setChosenMeasure={setChosenMeasure} />
      <ConverterArea chosenMeasure={chosenMeasure} setChosenMeasure={setChosenMeasure} />
    </Styles.Container>
  )
}

export default App
