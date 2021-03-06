import { useEffect } from 'react'
import * as Styles from './styles'
import options from './options'
const Header = ({
    chosenMeasure,
    setChosenMeasure
}) => {
    useEffect(() => {
        if (!chosenMeasure) {
            setChosenMeasure(options[0].suboptions[0])
        }
    })
    return (
        <Styles.Container>
            <Styles.BackgroundTop>
            </Styles.BackgroundTop>
            <Styles.HomeBar>
                {options.map((item, key) => (
                    <Styles.Option key={key}>
                        {item.title}
                        <Styles.Dropdown>
                            {item.suboptions.map((item, key) => (
                                <Styles.DropdownItem key={key}
                                    onClick={() => {
                                        setChosenMeasure({
                                            origin: item.origin,
                                            final: item.final
                                        })
                                    }}>
                                    {item.title}
                                </Styles.DropdownItem>
                            ))}
                        </Styles.Dropdown>
                    </Styles.Option>
                ))}
            </Styles.HomeBar>
            <Styles.Presentation>
                <Styles.Title>
                    Conversor de medidas
                </Styles.Title>
            </ Styles.Presentation>
        </Styles.Container>
    )
}
export default Header