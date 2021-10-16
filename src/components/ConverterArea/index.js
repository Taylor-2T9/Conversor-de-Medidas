import { useRef, useEffect } from 'react'
import options from './options'
import * as Styles from './styles'

const ConverterArea = ({
    chosenMeasure
}) => {
    const inputRef = useRef()
    const resultRef = useRef()
    useEffect(() => {
        resultRef.current.value = null
        inputRef.current.value = null
    }, [chosenMeasure])
    return (
        <Styles.Container onSubmit={(ev) => {
            ev.preventDefault()
        }}>
            <Styles.InputsArea>
                    <Styles.InputArea>
                <Styles.Measure>
                    {
                        `${chosenMeasure?.origin.name} (${chosenMeasure?.origin.abrev})`
                        || 'Centímetros (cm)'
                    }
                </Styles.Measure>
                    <Styles.Input
                        placeholder={'Digite o valor aqui'}
                        type={'number'}
                        ref={inputRef}
                        onInput={(ev) => {
                            if (ev.target.value) {
                                chosenMeasure ?
                                    resultRef.current.value = Number((parseInt(ev.target.value) / chosenMeasure?.origin.equivalentValue).toPrecision(8))
                                    : resultRef.current.value = parseInt(ev.target.value) / 100
                            } else {
                                resultRef.current.value = 0
                            }
                        }} />
                </Styles.InputArea>
                <Styles.Equal> = </Styles.Equal>
                <Styles.InputArea>
                    <Styles.Measure>
                        {
                            `${chosenMeasure?.final.name} (${chosenMeasure?.final.abrev})`
                            || 'Metros (m)'
                        }
                    </Styles.Measure>
                    <Styles.Input placeholder={'Resultado'} disabled={true} ref={resultRef} />
                </Styles.InputArea>
            </Styles.InputsArea>
            <Styles.ButtonArea>
                <Styles.ConfirmButton title={'Inútil, mas bonito.'}>
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