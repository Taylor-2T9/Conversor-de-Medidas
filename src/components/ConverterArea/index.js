import React from 'react'
import options from './options'
import * as Styles from './styles'

const ConverterArea = ({
    chosenMeasure
}) => {
    const inputRef = React.useRef()
    const resultRef = React.useRef()
    React.useEffect(() => {
        resultRef.current.value = null
        inputRef.current.value = null
    }, [chosenMeasure])
    return (
        <Styles.Container>
            <Styles.InputsArea>
                <Styles.Measure>{chosenMeasure?.origin.name || 'Centímetros'}</Styles.Measure>
                <Styles.InputArea>
                    <Styles.Input
                        placeholder={'Digite o valor aqui'}
                        type={'number'}
                        ref={inputRef}
                        onInput={(ev) => {
                            if (ev.target.value) {
                                chosenMeasure ?
                                resultRef.current.value = parseInt(ev.target.value) / chosenMeasure.origin.equivalentValue
                                : resultRef.current.value = parseInt(ev.target.value) / 100
                            } else {
                                resultRef.current.value = 0
                            }
                        }} />
                </Styles.InputArea>
                <Styles.Equal> = </Styles.Equal>
                <Styles.InputArea>
                    <Styles.Measure>{chosenMeasure?.final.name || 'Metros'}</Styles.Measure>
                    <Styles.Input placeholder={'Resultado'} disabled={true} ref={resultRef} />
                </Styles.InputArea>
            </Styles.InputsArea>
            <Styles.ButtonArea>
                <Styles.ConfirmButton>
                    Converter
                </Styles.ConfirmButton>
            </Styles.ButtonArea>
            <Styles.Wrapper>
                {options.map((item, key) => (
                    <Styles.Link href={item.link} target={'_blank'}>
                        <Styles.IconDiv title={item.title} key={key} backgroundColor={item.index}>
                            <Styles.Icon src={item.logo} />
                        </Styles.IconDiv>
                    </Styles.Link>
                ))}
            </Styles.Wrapper>
        </Styles.Container>
    )
}

export default ConverterArea