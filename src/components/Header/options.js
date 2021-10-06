const options = [
    {
        title: 'Comprimento',
        suboptions: [
            {
                title: 'cm -> m',
                origin: {
                    name: 'Centímetros',
                    equivalentValue: 100
                },
                final: {
                    name: 'Metros',
                    equivalentValue: 1
                },
            },
            {
                title: 'm -> cm',
                origin: {
                    name: 'Metros',
                    equivalentValue: 0.01
                },
                final: {
                    name: 'Centímetros',
                    equivalentValue: 1
                },
            },
            {
                title: 'm -> km',
                origin: {
                    name: 'Metros',
                    equivalentValue: 1000
                },
                final: {
                    name: 'Quilômetros',
                    equivalentValue: 1
                }
            },
            {
                title: 'km -> m',
                origin: {
                    name: 'Quilômetros',
                    equivalentValue: 0.001
                },
                final: {
                    name: 'Metros',
                    equivalentValue: 1
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
                    name: 'Quilômetros',
                    equivalentValue: 1
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
