const info = {
    cm: {
        description: 'Um centímetro é uma unidade de comprimento no sistema métrico, igual a um centésimo de metro, sendo o centi o prefixo SI para um fator de 1/100. O centímetro era a unidade básica de comprimento no agora obsoleto sistema de unidades centímetro-grama-segundo.',
        howToCalculate: '100 cm = 1 m | 100000 cm = 1 km',
    },
    m: {
        description: 'O metro é a unidade de medida de comprimento do Sistema Internacional de Unidades. É definido como "o comprimento do trajeto percorrido pela luz no vácuo durante um intervalo de tempo de 1/299 792 458 de segundo"',
        howToCalculate: '1 m = 100 cm | 1000 m = 1 km'
    },
    km: {
        description: 'O quilômetro ou quilómetro é uma unidade de medida de comprimento que deriva do metro e pertence ao Sistema Internacional de Unidades. A palavra "quilômetro" resulta da combinação do prefixo quilo com a palavra metro, razão por que um quilômetro equivale a mil metros',
        howToCalculate: '1 km = 1.000 m | 1 km = 100000 cm'
    }
}

const options = [
    {
        title: 'Comprimento',
        suboptions: [
            {
                title: 'Centímetro -> Metro ',
                origin: {
                    name: 'Centímetros',
                    abrev: 'cm',
                    equivalentValue: 100,
                    description: info.cm.description,
                    howToCalculate: info.cm.howToCalculate
                },
                final: {
                    name: 'Metros',
                    abrev: 'm',
                    description: info.m.description,
                    howToCalculate: info.m.howToCalculate
                },
            },
            {
                title: 'Metro -> Centímetro',
                origin: {
                    name: 'Metros',
                    abrev: 'm',
                    equivalentValue: 0.01,
                    description: info.m.description,
                    howToCalculate: info.m.howToCalculate
                },
                final: {
                    name: 'Centímetros',
                    abrev: 'cm',
                    description: info.cm.description,
                    howToCalculate: info.cm.howToCalculate
                },
            },
            {
                title: 'Metro -> Quilômetro',
                origin: {
                    name: 'Metros',
                    abrev: 'm',
                    equivalentValue: 1000,
                    description: info.m.description,
                    howToCalculate: info.m.howToCalculate
                },
                final: {
                    name: 'Quilômetros',
                    abrev: 'km',
                    description: info.km.description,
                    howToCalculate: info.km.howToCalculate
                }
            },
            {
                title: 'Quilômetro -> Metro',
                origin: {
                    name: 'Quilômetros',
                    abrev: 'km',
                    equivalentValue: 0.001,
                    description: info.km.description,
                    howToCalculate: info.km.howToCalculate
                },
                final: {
                    name: 'Metros',
                    abrev: 'm',
                    description: info.m.description,
                    howToCalculate: info.m.howToCalculate
                }
            },
            {
                title: 'Centímetro -> Quilômetro',
                origin: {
                    name: 'Centímetros',
                    abrev: 'cm',
                    equivalentValue: 100000,
                    description: info.cm.description,
                    howToCalculate: info.cm.howToCalculate
                },
                final: {
                    name: 'Quilômetros',
                    abrev: 'km',
                    description: info.km.description,
                    howToCalculate: info.km.howToCalculate
                }
            },
            {
                title: 'Quilômetro -> Centímetro',
                origin: {
                    name: 'Quilômetros',
                    abrev: 'km',
                    equivalentValue: 0.00001,
                    description: info.km.description,
                    howToCalculate: info.km.howToCalculate
                },
                final: {
                    name: 'Centímetros',
                    abrev: 'cm',
                    description: info.cm.description,
                    howToCalculate: info.cm.howToCalculate
                }
            }
        ]
    },
    {
        title: 'Peso',
        suboptions: [
            {
                title: 'Em desenvolvimento',
                origin: {
                    name: 'Metros',
                    equivalentValue: 1000
                },
                final: {
                    name: 'Quilômetros'
                }
            },
        ]
    },
    {
        title: 'Energia',
        suboptions: [
            {
                title: 'Em desenvolvimento',
                origin: {
                    name: 'Metros',
                    equivalentValue: 1000
                },
                final: {
                    name: 'Quilômetros',
                    equivalentValue: 1
                }
            },
        ]
    }
]
export default options