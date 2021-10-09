import { useRef, useState } from 'react'
import * as Styles from './styles'

const MeasureInfo = ({
    chosenMeasure
}) => {
    const [showOrigin, setShowOrigin] = useState(1)
    const [showFinal, setShowFinal] = useState(0)
    return (
        <Styles.Container>
            <Styles.Options>
                <Styles.Option onClick={() => {
                    setShowOrigin(1)
                    setShowFinal(0)
                }}
                    show={showOrigin}
                >
                    <Styles.Title>
                        {chosenMeasure?.origin.name}
                    </Styles.Title>
                </Styles.Option>
                <Styles.Vr>|</Styles.Vr>
                <Styles.Option onClick={() => {
                    setShowOrigin(0)
                    setShowFinal(1)
                }}
                    show={showFinal}
                >
                    <Styles.Title>
                        {chosenMeasure?.final.name}
                    </Styles.Title>
                </Styles.Option>
            </Styles.Options>
            <Styles.Info>
                <Styles.MeasureInfo showMe={showOrigin}>
                    <Styles.Formula>
                        {chosenMeasure?.origin.howToCalculate}
                    </Styles.Formula>
                    <Styles.Description>
                        {chosenMeasure?.origin.description}
                    </Styles.Description>
                </Styles.MeasureInfo>
                <Styles.MeasureInfo showMe={showFinal}>
                    <Styles.Formula>
                        {chosenMeasure?.final.howToCalculate}
                    </Styles.Formula>
                    <Styles.Description>
                        {chosenMeasure?.final.description}
                    </Styles.Description>
                </Styles.MeasureInfo>
            </Styles.Info>
        </Styles.Container>
    )
}
export default MeasureInfo