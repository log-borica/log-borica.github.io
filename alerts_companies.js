const alerts_companies = `[
    {
        "id": 456,
        "name": "ACTION AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 200,
        "name": "AFFINITY LOGISTICA INTERNACIONAL LTDA"
    },
    {
        "id": 5764,
        "name": "AIR SEA LOGISTIC LTDA"
    },
    {
        "id": 1044,
        "name": "ALC LOGISTICS LTDA"
    },
    {
        "id": 112,
        "name": "ANX LOGISTICA INTERNACIONAL E AGENCIAMENTO LTDA"
    },
    {
        "id": 4,
        "name": "ASIA SHIPPING TRANSPORTES INTERNACIONAIS LTDA"
    },
    {
        "id": 5032,
        "name": "AUDAZ GLOBAL LOGISTICA LTDA"
    },
    {
        "id": 4431,
        "name": "BDN LOGISTICS LTDA"
    },
    {
        "id": 7099,
        "name": "BLUE ROYAL LOGISTICA LTDA"
    },
    {
        "id": 5,
        "name": "BLU LOGISTICS BRASIL TRANSPORTES INTERNACIONAIS LTDA"
    },
    {
        "id": 2658,
        "name": "BRACHMANN WORLDWIDE LOGISTICS LTDA"
    },
    {
        "id": 1059,
        "name": "BRAVO CARGO TRANSPORTE INTERNACIONAL"
    },
    {
        "id": 562,
        "name": "BRAZIL WIND LOGISTICS AGENCIAMENTO INTERNACIONAL DE CARGAS LTDA"
    },
    {
        "id": 1070,
        "name": "BRUNIN EXPRESS TRANSPORTES LTDA"
    },
    {
        "id": 730,
        "name": "CARGOFAST LOGISTICS DO BRASIL LTDA."
    },
    {
        "id": 848,
        "name": "CERKLOG LOGISTICA E SERVICOS INTERNACIONAIS LTDA"
    },
    {
        "id": 5083,
        "name": "CODELI LOGISTICA INTERNACIONAL LTDA"
    },
    {
        "id": 315,
        "name": "COMISSARIA PIBERNAT LTDA"
    },
    {
        "id": 8961,
        "name": "CONNECTION CARGO LOGISTICA INTERNACIONAL"
    },
    {
        "id": 3,
        "name": "CRAFT MULTIMODAL LTDA"
    },
    {
        "id": 3627,
        "name": "CRONOS LOGISTICA LTDA"
    },
    {
        "id": 196,
        "name": "DZL LOGISTICA INTERNACIONAL LTDA"
    },
    {
        "id": 967,
        "name": "ELO SOLUCOES LOGISTICAS INTEGRADAS LTDA"
    },
    {
        "id": 239,
        "name": "ES BRASIL LOGISTICA LTDA"
    },
    {
        "id": 554,
        "name": "ETHIMA COMERCIO EXTERIOR LTDA"
    },
    {
        "id": 304,
        "name": "EXPEDITORS INTERNATIONAL DO BRASIL LTDA"
    },
    {
        "id": 620,
        "name": "EXZELLENZ COMERCIO EXTERIOR E TRANSPORTES INTERNACIONAIS"
    },
    {
        "id": 474,
        "name": "FEDEX TRADE NETWORKS SERVICOS"
    },
    {
        "id": 5754,
        "name": "FISCHER & RECHSTEINER DO BRASIL LOGISTICA S.A"
    },
    {
        "id": 11158,
        "name": "FOURTH COMPANY LOGISTICS LTDA"
    },
    {
        "id": 116,
        "name": "FOX CARGO DO BRASIL"
    },
    {
        "id": 1135,
        "name": "FRAKT LOGISTICS TRANSPORTES INTERNACIONAIS"
    },
    {
        "id": 2101,
        "name": "G4 CARGO DO BRASIL LOGISTICA LTDA"
    },
    {
        "id": 92,
        "name": "GEODIS GERENCIAMENTO DE FRETES"
    },
    {
        "id": 1185,
        "name": "GP CARGO AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 1038,
        "name": "GRACO LOGISTICA E TRANSPORTES LTDA"
    },
    {
        "id": 318,
        "name": "GWL LOGISTICS IMPORTACAO EXPORTACAO"
    },
    {
        "id": 585,
        "name": "HANSA MEYER GLOBAL TRANSPORTES LTDA"
    },
    {
        "id": 29,
        "name": "HEVILE LOGISTICA E CONSULTORIA INTERNACIONAL LTDA"
    },
    {
        "id": 6373,
        "name": "HOFFEN INTERNATIONAL LOGISTICS LTDA"
    },
    {
        "id": 1800,
        "name": "IB FREIGHT IMPORTACAO E EXPORTACAO LTDA"
    },
    {
        "id": 751,
        "name": "IMPORTCARGO DO BRASIL AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 121,
        "name": "INTERFREIGHT TRANSPORTES INTERNACIONAIS LTDA"
    },
    {
        "id": 1959,
        "name": "INTERX LOGISTICS LTDA"
    },
    {
        "id": 5033,
        "name": "INVICTA COMERCIO EXTERIOR E"
    },
    {
        "id": 542,
        "name": "JAS DO BRASIL AGENCIAMENTO LOGISTICO LTDA"
    },
    {
        "id": 1186,
        "name": "JM LOGISTICA INTERNACIONAL E DESPACHOS ADUANEIROS LTDA"
    },
    {
        "id": 3558,
        "name": "KRG LOGISTICA LTDA"
    },
    {
        "id": 234,
        "name": "KUEHNE NAGEL SERVICOS LOGISTICOS LTDA."
    },
    {
        "id": 7522,
        "name": "LIKES LOGISTICA INTERNACIONAL LTDA"
    },
    {
        "id": 881,
        "name": "LOCKSLEY LOGISTICA LTDA"
    },
    {
        "id": 800,
        "name": "LOGISTIC CO. INTERNACIONAL LTDA"
    },
    {
        "id": 1292,
        "name": "LOGITRADE REPRESENTACAO, TRANSPORTES E COMERCIO INTERNACIONA"
    },
    {
        "id": 95,
        "name": "MASTER SUL COMEX LTDA"
    },
    {
        "id": 2617,
        "name": "MAXIMUNDI IMPORTACAO E EXPORTACAO LTDA"
    },
    {
        "id": 7324,
        "name": "MPG LOGISTICS BRASIL LTDA"
    },
    {
        "id": 10142,
        "name": "NOMAD AGENCIAMENTO DE CARGAS"
    },
    {
        "id": 1409,
        "name": "NOWPORTS BRASIL LTDA"
    },
    {
        "id": 772,
        "name": "PARTNER AGENCIAMENTO DE CARGAS"
    },
    {
        "id": 222,
        "name": "PLUS CARGO INTERNACIONAL LTDA"
    },
    {
        "id": 41,
        "name": "POLY CARGO LOGISTICA LTDA"
    },
    {
        "id": 1633,
        "name": "PORTHOS INTERNATIONAL LOGISTICS LTDA"
    },
    {
        "id": 928,
        "name": "PROLIN - IMPORTACAO E EXPORTACAO, PROJETOS E LOGISTICA INTEG"
    },
    {
        "id": 1062,
        "name": "PROLINK BRASIL AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 5572,
        "name": "QUALITY LOGISTICA MULTIMODAL E COMERCIO EXTERIOR LTDA"
    },
    {
        "id": 127,
        "name": "QUANTUM LOGISTICA LTDA"
    },
    {
        "id": 10676,
        "name": "SATHYA LOGISTICA INTERNACIONAL LTDA"
    },
    {
        "id": 8039,
        "name": "SAVILOG SERVICOS DE COMERCIO"
    },
    {
        "id": 57,
        "name": "SCHENKER DO BRASIL TRANSPORTES INTERNACIONAIS LTDA"
    },
    {
        "id": 422,
        "name": "SCHRYVER DO BRASIL AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 1174,
        "name": "SEA EXPRESS LOGISTICA LTDA"
    },
    {
        "id": 6490,
        "name": "SEND CARGO AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 9064,
        "name": "STAR BRASIL SERVICOS LOGISTICOS LTDA"
    },
    {
        "id": 10143,
        "name": "TEX SHIPPING LTDA"
    },
    {
        "id": 188,
        "name": "TRANSIT BR LOGISTICA LTDA"
    },
    {
        "id": 674,
        "name": "UW DO BRASIL AGENCIAMENTO"
    },
    {
        "id": 295,
        "name": "VENTANA SERRA DO BRASIL AGENCIAMENTO DE CARGAS LTDA"
    },
    {
        "id": 66,
        "name": "VIGUIMA LOGISTICS INTERNATIONAL LTDA"
    },
    {
        "id": 1883,
        "name": "VIP LOGISTICS BR AGENCIAMENTO"
    },
    {
        "id": 3817,
        "name": "VOX SHIPPING DO BRASIL AGENCIAMENTO LTDA"
    },
    {
        "id": 10661,
        "name": "WIDE LOGISTICS LTDA"
    },
    {
        "id": 10684,
        "name": "YAHO LOGISTICS DO BRASIL LIMITADA"
    }
]`;