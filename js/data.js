var db = {
  categories: [
    {
      name: "animales",
      instances: [
        {
          name: "venado",
          instances: [
            {
              img: "deer1.jpg",
              desc: "venado"
            },
            {
              img: "deer2.webp",
              desc: "venado"
            },
            {
              img: "deer3.jpg",
              desc: "venado"
            },
            {
              img: "deer4.jpg",
              desc: "venado"
            },
            {
              img: "deer5.png",
              desc: "muchos venados"
            }
          ]
        },
        {
          name: "araña",
          instances: [
                {
                    img: "spider1.jpg",
                    desc: "araña"
                },
                {
                    img: "spider2.jpg",
                    desc: "araña en su telaraña"
                },
                {
                    img: "spider3.jpg",
                    desc: "araña"
                }
            ]
        },
        {
          name: "hormiga",
          instances: [
                {
                    img: "ant1.webp",
                    desc: "hormiga"
                },
                {
                    img: "ant2.jpg",
                    desc: "hormiga"
                },
                {
                    img: "ant4.jpg",
                    desc: "hormigas"
                },
                {
                    img: "ant5.jpg",
                    desc: "hormigas"
                }
            ]
        },
        {
          name: "canguro",
          instances: [
            {
              img: "kangaroo1.webp",
              desc: "canguro"
            },
            {
              img: "kangaroo2.jpg",
              desc: "canguro"
            }
          ]
        },
        {
          name: "koala",
          instances: [
            {
              img: "koala1.jpg",
              desc: "koala"
            },
            {
              img: "koala2.jpg",
              desc: "koala"
            },
            {
              img: "koala3.jpg",
              desc: "koala"
            }
          ]
        },
        {
          name: "tucán",
          instances: [
            {
              img: "toucan1.jpg",
              desc: "tucán"
            },
            {
              img: "toucan2.jpg",
              desc: "tucán"
            },
            {
              img: "toucan3.jpg",
              desc: "tucán"
            }
          ]
        },
        {
          name: "camello",
          instances: [
                {
                    img: "camel1.jpg",
                    desc: "camello"
                },
                {
                    img: "camel2.jpg",
                    desc: "camellos"
                },
                {
                    img: "camel3.jpg",
                    desc: "camellos"
                }
            ]
        },
        {
          name: "grillo",
          instances: [
            {
              img: "cricket1.png",
              desc: "grillo"
            },
            {
              img: "cricket2.jpg",
              desc: "grillo"
            },
            {
              img: "cricket3.jpg",
              desc: "muchos grillos"
            }
          ],
          sonidos: ["crickets1.wav"]
        },
        {
          name: "burro",
          instances: [
            {
              img: "donkey1.webp",
              desc: "burro"
            },
            {
              img: "donkey2.png",
              desc: "burro"
            }
          ],
          sonidos: ["donkey1.wav","donkey2.flac"]
        },
        {
          name: "perro",
          instances: [
              {
                  img: "dog1.jpg",
                  desc: "perro, el perro esta mirando"
              },
              {
                  img: "dog2.jpg",
                  desc: "perro, perro esta corriendo alegre"
              },
              {
                  img: "dog3.jpg",
                  desc: "perro, tres cachorros de perro blancos"
              },
              {
                  img: "dog4.jpg",
                  desc: "perro, tres cachorros de perro lindos"
              },
              {
                  img: "dog5.jpg",
                  desc: "perro, con cepillo de dientes"
              },
              {
                  img: "dog6.jpg",
                  desc: "perro, dos perros en carro"
              }
          ],
          sonidos: ["dog1.wav","dog2.wav","dog3.wav","dog4.mp3","dog5.wav"],
          duraciones: [[0,1500],"","",[1600,2900],[0,4000]]
        },
        {
          name: "gallo",
          instances: [
              {
                  img: "rooster1.jpg",
                  desc: "gallo"
              },
              {
                  img: "rooster2.jpg",
                  desc: "los gallos estan peleando"
              },
              {
                  img: "rooster3.jpg",
                  desc: "el gallo canta, kikirikiii"
              }                    
          ],
          sonidos: ["rooster1.wav","rooster2.wav"]
        },
        {
          name: "culebra",
          instances: [
              {
                  img: "snake1.jpg",
                  desc: "culebra verde"
              },
              {
                  img: "snake2.png",
                  desc: "culebra coral"
              },
              {
                  img: "snake3.jpg",
                  desc: "cobra"
              }
          ],
          sonidos: ["snake1.wav"]
        },
        {
          name: "rana",
          instances: [
              {
                  img: "frog1.jpg",
                  desc: "rana de ojos rojos"
              },
              {
                  img: "frog2.jpg",
                  desc: "rana verde"
              },
              {
                  img: "frog3.jpg",
                  desc: "rana roja"
              },
              {
                  img: "frog4.jpg",
                  desc: "rana verde"
              },
              {
                  img: "frog5.jpg",
                  desc: "muchas ranas"
              }
          ],
          sonidos: ["frog1.wav","frog2.wav","frog3.wav"]
        },
        {
          name: "gato",
          instances: [
              {
                  img: "cat1.jpg",
                  desc: "gato"
              },
              {
                  img: "cat2.jpg",
                  desc: "gato jugando"
              },
              {
                  img: "cat3.jpg",
                  desc: "gato, el gato corre por la grama"
              },
              {
                  img: "cat4.jpg",
                  desc: "gato listo para cazar"
              },
              {
                  img: "cat5.jpg",
                  desc: "una pandilla de gatos"
              }
          ],
          sonidos: ["cat1.wav","cat2.wav"]
        },
        {
          name: "caballo",
          instances: [
            {
              img: "horse1.jpg",
              desc: "hermoso caballo de patas blancas"
            },
            {
              img: "horse2.jpg",
              desc: "caballo"
            },
            {
              img: "horse3.jpg",
              desc: "caballo en dos patas"
            },
            {
              img: "horse4.jpg",
              desc: "caballo de patas blancas"
            },
            {
              img: "horse5.jpg",
              desc: "tres caballos mirandonos"
            },
            {
              img: "horse6.jpg",
              desc: "caballo corriendo en el agua"
            }
          ],
          sonidos: ["horse1.wav","horse2.wav","horse3.wav","horse4.wav"]
        },
        {
          name: "oso",
          instances: [
            {
              img: "bear1.jpg",
              desc: "oso pardo"
            },
            {
              img: "bear2.jpg",
              desc: "oso parado en dos patas"
            },
            {
              img: "bear3.jpg",
              desc: "osa con su cachorro"
            },
            {
              img: "bear4.jpg",
              desc: "oso blanco"
            },
            {
              img: "bear5.jpg",
              desc: "oso panda"
            },
            {
              img: "bear6.jpg",
              desc: "oso panda con su cria"
            }
          ],
          sonidos: ["bear1.wav"]
        },
        {
          name: "vaca",
          instances: [
            {
              img: "cow1.jpg",
              desc: "vaca blanca y negra"
            },
            {
              img: "cow2.jpg",
              desc: "vaca blanca y negra"
            },
            {
              img: "cow3.jpg",
              desc: "la vaca esta saltando"
            },
            {
              img: "cow4.jpg",
              desc: "muchas vacas"
            },
            {
              img: "cow5.jpeg",
              desc: "la vaca esta cerca"
            },
            {
              img: "cow6.jpg",
              desc: "tres vacas jovenes"
            }
          ],
          sonidos: ["cow1.wav","cow2.wav"]
        },
        {
          name: "pato",
          instances: [
                {
                    img: "duck1.jpg",
                    desc: "pato en el agua"
                },
                {
                    img: "duck2.jpg",
                    desc: "pato en la tierra"
                },
                {
                    img: "duck3.jpg",
                    desc: "un pato blanco"
                }
            ]
        },
        {
          name: "elefante",
          instances: [
              {
                  img: "elephant1.jpg",
                  desc: "un elefante y su hijo"
              },
              {
                  img: "elephant2.jpg",
                  desc: "elefante"
              },
              {
                  img: "elephant3.jpg",
                  desc: "dos elefantes jugando"
              },
          ],
          sonidos: ["elephant1.wav"]
        },
        {
          name: "zorro",
          instances: [
                {
                    img: "fox1.jpg",
                    desc: "zorro"
                },
                {
                    img: "fox2.jpg",
                    desc: "zorro"
                },
                {
                    img: "fox3.jpg",
                    desc: "zorro"
                }
            ]
        },
        {
          name: "gorila",
          instances: [
            {
              img: "gorilla1.jpg",
              desc: "la cara de un gorila"
            },
            {
              img: "gorilla2.jpg",
              desc: "dos gorilas peleando"
            },
            {
              img: "gorilla3.webp",
              desc: "gorila"
            },
            {
              img: "gorilla4.jpg",
              desc: "gorila con sus hijos"
            },
            {
              img: "gorilla5.jpg",
              desc: "el gorila esta saltando"
            },
            {
              img: "gorilla6.jpg",
              desc: "cinco gorilas"
            }
          ],
          sonidos: ["gorilla1.wav"]
        },
        {
          name: "gallina",
          instances: [
              {
                  img: "hen1.jpg",
                  desc: "la gallina esta con sus pollitos"
              },
              {
                  img: "hen2.jpg",
                  desc: "gallina buscando comida"
              },
              {
                  img: "hen3.jpg",
                  desc: "gallina"
              },
              {
                  img: "hen4.jpg",
                  desc: "muchas gallinas con sus huevos"
              }
          ],
          sonidos: ["hen1.wav","hen2.wav","hen3.wav"]
        },
        {
          name: "león",
          instances: [
              {
                  img: "lion1.jpg",
                  desc: "león"
              },
              {
                  img: "lion2.jpg",
                  desc: "león y leona"
              },
              {
                  img: "lion3.jpg",
                  desc: "el león esta descansando"
              },
              {
                  img: "lion4.jpg",
                  desc: "león rugiendo"
              },
              {
                  img: "lion5.jpg",
                  desc: "leones"
              }
          ],
          sonidos: ["lion1.flac"]
        },
        {
          name: "buho",
          instances: [
              {
                  img: "owl1.jpg",
                  desc: "buho"
              },
              {
                  img: "owl2.jpg",
                  desc: "buho"
              },
              {
                  img: "owl3.jpg",
                  desc: "lechuza blanca"
              },
              {
                  img: "owl4.jpg",
                  desc: "lechuza volando"
              },
              {
                  img: "owl5.jpg",
                  desc: "lechuza blanca"
              }
          ],
          sonidos: ["owl1.wav","owl2.wav"]
        },
        {
          name: "pinguino",
          instances: [
                {
                    img: "penguin1.jpg",
                    desc: "el pinguino cuida de su hijo"
                },
                {
                    img: "penguin2.jpg",
                    desc: "los pinguinos caminan en fila"
                },
                {
                    img: "penguin3.jpg",
                    desc: "tres pinguinos"
                }
            ]
        },
        {
          name: "chompipe",
          instances: [
              {
                  img: "turkey1.jpg",
                  desc: "chompipe"
              },
              {
                  img: "turkey2.jpg",
                  desc: "chompipe"
              },
              {
                  img: "turkey3.jpg",
                  desc: "chompipe"
              }
          ],
          sonidos: ["turkey1.mp3"]
        },
        {
          name: "cerdo",
          instances: [
              {
                  img: "pig1.jpg",
                  desc: "cerdito rosado"
              },
              {
                  img: "pig2.png",
                  desc: "al cerdito lo sacan a pasear"
              },
              {
                  img: "pig3.jpg",
                  desc: "cerdo con manchas"
              },
              {
                  img: "pig4.jpg",
                  desc: "muchos cerditos"
              },
              {
                  img: "pig5.jpg",
                  desc: "muchos cerditos manchados"
              }
          ],
          sonidos: ["pig1.wav","pig2.wav"]
        },
        {
          name: "lora",
          instances: [
              {
                  img: "parrot1.jpg",
                  desc: "la lora es verde"
              },
              {
                  img: "parrot2.jpg",
                  desc: "lora azul cabeza roja"
              },
              {
                  img: "parrot3.jpg",
                  desc: "la lora levanta su patita"
              },
              {
                  img: "parrot4.jpg",
                  desc: "la lorita esta en una rama"
              },
              {
                  img: "parrot5.jpg",
                  desc: "cuatro loras rojas"
              },
          ],
          sonidos: ["parrot1.wav","parrot2.wav"]
        },
        {
          name: "tigre",
          instances: [
            {
              img: "tiger1.jpg",
              desc: "el tigre esta en la hierba"
            },
            {
              img: "tiger2.jpg",
              desc: "el tigre esta en la hierba"
            },
            {
              img: "tiger3.jpg",
              desc: "el tigre esta en la piedra"
            },
            {
              img: "tiger4.jpg",
              desc: "tigre blanco"
            },
            {
              img: "tiger5.jpg",
              desc: "tigre rugiendo"
            },
            {
              img: "tiger6.png",
              desc: "cuidado, el tigre esta cerca"
            }
          ],
          sonidos: ["tiger1.flac"]
        },
        {
          name: "águila",
          instances: [
            {
              img: "eagle1.jpg",
              desc: "águila volando"
            },
            {
              img: "eagle2.jpg",
              desc: "águila volando sobre el agua"
            },
            {
              img: "eagle3.jpg",
              desc: "el águila ha cazado un pez"
            },
            {
              img: "eagle4.jpg",
              desc: "el águila posa sobre el brazo del hombre"
            },
            {
              img: "eagle5.jpg",
              desc: "ves el águila en el árbol?"
            }
          ],
          sonidos: ["eagle1.wav","eagle2.wav"]
        },
        {
          name: "cabra",
          instances: [
            {
              img: "goat1.jpg",
              desc: "una cabra cafe con negra"
            },
            {
              img: "goat2.jpg",
              desc: "la cabra esta parada sobre el tronco"
            },
            {
              img: "goat3.jpg",
              desc: "una cabra blanca"
            },
            {
              img: "goat4.jpg",
              desc: "dos cabritas chiquitas"
            },
            {
              img: "goat5.jpg",
              desc: "muchas cabras"
            },
            {
              img: "goat6.jpg",
              desc: "las cabras se subieron al arbol"
            }
          ],
          sonidos: ["goat1.wav","goat2.wav"]
        },
        {
          name: "oveja",
          instances: [
              {
                  img: "sheep1.jpg",
                  desc: "la oveja nos esta viendo"
              },
              {
                  img: "sheep2.jpg",
                  desc: "oveja con su corderito"
              },
              {
                  img: "sheep3.jpg",
                  desc: "dos ovejas"
              },
              {
                  img: "sheep4.jpg",
                  desc: "dos corderitos"
              },
              {
                  img: "sheep5.jpg",
                  desc: "muchas ovejas"
              },
              {
                  img: "sheep6.jpg",
                  desc: "las ovejas estan cerca"
              }
          ],
          sonidos: ["sheep1.flac","sheep2.wav","sheep3.wav"]
        },
        {
          name: "escorpión",
          instances: [
                {
                    img: "scorpion1.jpg",
                    desc: "escorpion en la tierra"
                },
                {
                    img: "scorpion2.jpg",
                    desc: "cuidado, el escorpion es venenoso"
                },
                {
                    img: "scorpion3.jpg",
                    desc: "el escorpion esta en la grama"
                },
                {
                    img: "scorpion4.jpg",
                    desc: "muchos escorpiones"
                }
            ]
        },
        {
          name: "murciélago",
          instances: [
              {
                  img: "bat1.jpg",
                  desc: "murcielago volando en la noche"
              },
              {
                  img: "bat2.jpg",
                  desc: "murcielago"
              },
              {
                  img: "bat3.jpg",
                  desc: "el murcielago vuela"
              },
              {
                  img: "bat4.jpeg",
                  desc: "muchos murcielagos descansando"
              },
              {
                  img: "bat5.jpg",
                  desc: "muchos murcielagos descansando"
              }
          ],
          sonidos: ["bat1.wav","bat2.wav"]
        },
        {
          name: "conejo",
          instances: [
                {
                    img: "rabbit1.webp",
                    desc: "conejo"
                },
                {
                    img: "rabbit2.jpg",
                    desc: "dos conejitos comiendo hierba"
                },
                {
                    img: "rabbit3.jpg",
                    desc: "dos conejitos besandose"
                },
                {
                    img: "rabbit4.jpg",
                    desc: "tres conejos lindos"
                },
                {
                    img: "rabbit5.jpg",
                    desc: "dos conejos en el bosque"
                }
            ]
        },
        {
          name: "ardilla",
          instances: [
                {
                    img: "squirrel1.jpg",
                    desc: "una ardilla comiendo"
                },
                {
                    img: "squirrel2.jpg",
                    desc: "ardilla"
                },
                {
                    img: "squirrel3.jpg",
                    desc: "ardilla roja en un arbol"
                },
                {
                    img: "squirrel4.jpg",
                    desc: "dos ardillas"
                },{
                    img: "squirrel5.jpg",
                    desc: "una ardilla comiendo sus nueces"
                }
            ]
        }
      ]
    },
    {
      name: "cosas de casa",
      instances: [
        {
          name: "licuadora",
          instances: [
            {
              img: "blender1.jpg",
              desc: "licuadora negra"
            },
            {
              img: "blender2.jpg",
              desc: "licuadora roja"
            },
            {
              img: "blender3.jpg",
              desc: "licuadora con frutas"
            }
          ],
          sonidos: ["blender1.wav"]
        },
        {
          name: "cama",
          instances: [
            {
              img: "bed1.jpg",
              desc: "cama de madera"
            },
            {
              img: "bed2.jpeg",
              desc: "cama"
            },
            {
              img: "bed3.jpg",
              desc: "toda la familia está en la cama"
            },
            {
              img: "bed4.jpg",
              desc: "cama para niña"
            },
            {
              img: "bed5.jpg",
              desc: "cama de dos pisos para niños"
            }
          ]
        },
        {
          name: "almohada",
          instances: [
            {
              img: "pillow1.jpg",
              desc: "las almohadas son blancas"
            },
            {
              img: "pillow2.jpg",
              desc: "almohadas de colores"
            },
            {
              img: "pillow3.jpg",
              desc: "cuatro almohadas blancas"
            }
          ]
        },
        {
          name: "comedor",
          instances: [
            {
              img: "comedor1.jpg",
              desc: "comedor de madera"
            },
            {
              img: "comedor2.jpg",
              desc: "comedor con los platos y cubiertos"
            },
            {
              img: "comedor3.jpg",
              desc: "comedor de seis sillas"
            },
            {
              img: "comedor4.jpg",
              desc: "comedor de cuatro sillas"
            }
          ]
        },
        {
          name: "candela",
          instances: [
            {
              img: "candela1.jpg",
              desc: "candela encendida"
            },
            {
              img: "candela2.png",
              desc: "tres candelas encendidas"
            },
            {
              img: "candela3.jpg",
              desc: "cinco candelitas de colores"
            },
            {
              img: "candela4.jpg",
              desc: "cinco candelas de colores"
            }
          ]
        },
        {
          name: "vaso",
          instances: [
            {
              img: "vaso1.jpg",
              desc: "vaso transparente de vidrio"
            },
            {
              img: "vaso2.jpg",
              desc: "vasitos de colores"
            },
            {
              img: "vaso3.jpeg",
              desc: "vasos plásticos de colores"
            }
          ]
        },
        {
          name: "cuchara",
          instances: [
            {
              img: "spoon1.png",
              desc: "seis cucharas de metal"
            },
            {
              img: "spoon2.jpg",
              desc: "tres cucharas de madera"
            },
            {
              img: "spoon3.png",
              desc: "muchas cucharas"
            },
            {
              img: "spoon4.jpg",
              desc: "cuatro cucharitas de plástico"
            },
            {
              img: "spoon5.jpg",
              desc: "seis cucharas para bebé"
            }
          ]
        },
        {
          name: "tenedor",
          instances: [
            {
              img: "fork1.jpg",
              desc: "tenedor"
            },
            {
              img: "fork2.jpg",
              desc: "seis tenedores de metal"
            },
            {
              img: "fork3.jpg",
              desc: "varios tenedores diferentes"
            },
            {
              img: "fork4.png",
              desc: "seis tenedores de colores"
            }
          ]
        },
        {
          name: "cuchillo",
          instances: [
            {
              img: "knife1.jpg",
              desc: "cuchillo de cocina"
            },
            {
              img: "knife2.jpg",
              desc: "cuchillo de mesa"
            },
            {
              img: "knife3.jpg",
              desc: "cuatro cuchillos"
            }
          ]
        },
        {
          name: "televisión",
          instances: [
                {
                    img: "tv1.jpg",
                    desc: "la familia ve la television"
                },
                {
                    img: "tv2.jpg",
                    desc: "television"
                }
            ]
        },
        {
          name: "casa",
          instances: [
                {
                    img: "house1.jpg",
                    desc: "casa grande"
                },
                {
                    img: "house2.jpg",
                    desc: "casa con verja de madera"
                },
                {
                    img: "house3.jpg",
                    desc: "casa de madera"
                }
            ]
        },
        {
          name: "puerta",
          instances: [
                {
                    img: "door1.jpg",
                    desc: "puerta de madera"
                },
                {
                    img: "door2.jpg",
                    desc: "puerta abierta"
                },
                {
                    img: "door3.jpg",
                    desc: "puerta de vidrio"
                }
            ]
        },
        {
          name: "bujía",
          instances: [
            {
              img: "bulb1.jpg",
              desc: "bujía"
            }
          ]
        },
        {
          name: "silla",
          instances: [
            {
              img: "chair1.jpg",
              desc: "silla"
            },
            {
              img: "chair2.jpg",
              desc: "silla blanca"
            },
            {
              img: "chair3.jpg",
              desc: "silla para bebés"
            },
            {
              img: "chair4.jpg",
              desc: "silla mecedora"
            },
            {
              img: "chair5.jpg",
              desc: "silla plástica"
            }
          ]
        },
        {
          name: "closet",
          instances: [
                {
                  img: "closet1.jpg",
                  desc: "closet"
                },
                {
                  img: "closet2.jpg",
                  desc: "closet"
                },
                {
                  img: "closet3.jpg",
                  desc: "closet"
                },
                {
                  img: "closet4.jpeg",
                  desc: "closet"
                }
            ]
        },
        {
          name: "percha",
          instances: [
            {
              img: "percha1.jpg",
              desc: "percha negra"
            },
            {
              img: "percha2.jpg",
              desc: "cinco perchas"
            },
            {
              img: "percha3.webp",
              desc: "percha de madera"
            },
            {
              img: "percha4.jpg",
              desc: "cuatro perchas"
            }
          ]
        },
        {
          name: "abanico",
          instances: [
                {
                    img: "fan1.jpg",
                    desc: "abanico"
                },
                {
                    img: "fan2.jpg",
                    desc: "abanico azul"
                },
                {
                    img: "fan3.jpg",
                    desc: "abanico de techo"
                },
                {
                    img: "fan4.jpg",
                    desc: "abanico de techo con luz encendida"
                },
                {
                    img: "fan5.jpg",
                    desc: "el abanico sopla a la mujer"
                }
            ]
        },
        {
          name: "refrigerador",
          instances: [
                {
                    img: "refrigerator1.jpg",
                    desc: "refrigerador con la puerta abierta"
                },
                {
                    img: "refrigerator2.jpg",
                    desc: "refrigerador"
                },
                {
                    img: "refrigerator3.jpg",
                    desc: "muchos refrigeradores"
                }
            ]
        },
        {
          name: "celular",
          instances: [
                {
                    img: "smartphone1.jpg",
                    desc: "tres celulares"
                },
                {
                    img: "smartphone2.jpeg",
                    desc: "el hombre tiene el celular en sus manos"
                }
            ]
        },
        {
          name: "sofá",
          instances: [
                {
                    img: "sofa1.jpeg",
                    desc: "sofá negro"
                },
                {
                    img: "sofa2.jpeg",
                    desc: "sofá rojo"
                },
                {
                    img: "sofa3.jpeg",
                    desc: "sofá blanco"
                },
                {
                    img: "sofa4.jpg",
                    desc: "la familia esta sentada en el sofá"
                },
                {
                    img: "sofa5.jpeg",
                    desc: "el perro está en el sofá"
                },
                {
                    img: "sofa6.jpg",
                    desc: "el niño y el perro están en el sofá"
                }
            ]
        },
        {
          name: "cocina",
          instances: [
                {
                    img: "stove1.jpeg",
                    desc: "cocina"
                },
                {
                    img: "stove2.jpg",
                    desc: "cocina con fuego"
                },
                {
                    img: "stove3.jpg",
                    desc: "mujer cocinando"
                },
                {
                    img: "stove4.jpg",
                    desc: "cocina con ollas"
                }
            ]
        },
        {
          name: "ventana",
          instances: [
                {
                    img: "window1.jpg",
                    desc: "la ventana está cerrada"
                },
                {
                    img: "window2.jpg",
                    desc: "ventana con vista al jardín"
                },
                {
                    img: "window3.png",
                    desc: "la ventana está abierta"
                },
                {
                    img: "window4.jpg",
                    desc: "ventana"
                }
            ]
        }
      ]
    },
    {
      name: "numeros",
      instances: [
            {
                name: "uno",
                instances: [
                    {
                        img: "apple1.jpg",
                        desc: "una manzana color verde"
                    },
                    {
                        img: "bicycle1.png",
                        desc: "una bicicleta roja"
                    },
                    {
                        img: "fox1.jpg",
                        desc: "un zorro"
                    }
                ]
            },
            {
                name: "dos",
                instances: [
                    {
                        img: "dog6.jpg",
                        desc: "dos perros"
                    },
                    {
                        img: "car4.jpg",
                        desc: "dos carros"
                    },
                    {
                        img: "bulb1.jpg",
                        desc: "dos bujias"
                    },
                    {
                        img: "gorilla2.jpg",
                        desc: "dos gorilas"
                    }
                ]
            },
            {
                name: "tres",
                instances: [
                    {
                        img: "cow6.jpg",
                        desc: "tres vacas"
                    },
                    {
                        img: "dog4.jpg",
                        desc: "tres perritos"
                    },
                    {
                        img: "horse5.jpg",
                        desc: "tres caballos"
                    },
                    {
                        img: "mango1.jpg",
                        desc: "tres mangos"
                    },
                    {
                        img: "penguin3.jpg",
                        desc: "tres pinguinos"
                    }
                ]
            }
                            ]
    },
    {
      name: "transporte",
      instances: [
        {
          name: "bus",
          instances: [
            {
              img: "bus1.jpg",
              desc: "bus de lujo"
            },
            {
              img: "bus2.jpg",
              desc: "bus de lujo"
            },
            {
              img: "bus3.jpg",
              desc: "bus escolar amarillo"
            },
            {
              img: "bus4.jpg",
              desc: "muchos buses escolares"
            },
            {
              img: "bus5.jpg",
              desc: "el niño sube al bus"
            }
          ],
          sonidos: ["bus1.mp3"]
        },
        {
          name: "helicóptero",
          instances: [
            {
                img: "heli1.jpg",
                desc: "helicóptero rojo"
            },
            {
                img: "heli2.jpg",
                desc: "helicóptero"
            },
            {
                img: "heli3.jpg",
                desc: "helicóptero"
            },
            {
                img: "heli4.gif",
                desc: "helicóptero militar"
            }
          ],
          sonidos: ["heli1.wav"]
        },
        {
          name: "carro",
          instances: [
              {
                  img: "car1.jpg",
                  desc: "carrera de carros"
              },
              {
                  img: "car2.jpg",
                  desc: "carro deportivo"
              },
              {
                  img: "car3.jpg",
                  desc: "carro azul"
              },
              {
                  img: "car4.jpg",
                  desc: "dos carros"
              },
              {
                  img: "car6.jpeg",
                  desc: "tres carros"
              }
            ],
          sonidos: ["car1.wav","car2.wav"]
        },
        {
          name: "avión",
          instances: [
              {
                  img: "plane1.jpg",
                  desc: "avión volando"
              },
              {
                  img: "plane2.jpg",
                  desc: "avión volando en el cielo"
              },
            {
              img: "plane3.webp",
              desc: "avión volando por encima de las nubes"
            },
            {
              img: "plane4.jpg",
              desc: "avion despegando"
            },
            {
              img: "plane5.jpg",
              desc: "aviones militares"
            }
          ],
          sonidos: ["plane1.wav", "plane2.wav"]
        },
        {
          name: "moto",
          instances: [
            {
              img: "motorcycle1.jpg",
              desc: "moto"
            },
            {
              img: "motorcycle2.jpg",
              desc: "moto deportiva"
            },
            {
              img: "motorcycle3.jpg",
              desc: "carrera de motos"
            },
            {
              img: "motorcycle4.jpg",
              desc: "carrera de motos en la tierra"
            },
            {
              img: "motorcycle5.jpg",
              desc: "moto"
            }
          ],
          sonidos: ["moto1.wav","moto2.aiff","moto3.aiff","moto4.mp3"]
        },
        {
          name: "bicicleta",
          instances: [
            {
                img: "bicycle1.png",
                desc: "bicicleta roja"
            },
            {
                img: "bicycle2.jpg",
                desc: "bicicleta azul"
            },
            {
              img: "bicycle3.jpeg",
              desc: "carrera de bicicletas"
            },
            {
              img: "bicycle4.jpg",
              desc: "niños en carrera de bicicletas"
            },
            {
              img: "bicycle5.jpg",
              desc: "bicicleta de montaña"
            }
          ]
        },
        {
          name: "camioneta",
          instances: [
            {
              img: "camioneta1.jpg",
              desc: "camioneta roja"
            },
            {
              img: "camioneta2.jpg",
              desc: "camioneta vieja"
            },
            {
              img: "camioneta3.webp",
              desc: "camioneta vieja"
            }
          ]
        },
        {
          name: "camión",
          instances: [
            {
              img: "camion0.jpg",
              desc: "camión volquete"
            },
            {
              img: "camion1.jpg",
              desc: "camión bombero"
            },
            {
              img: "camion2.jpg",
              desc: "camión recolector de basura"
            },
            {
              img: "camion3.jpg",
              desc: "trailer"
            },
            {
              img: "camion4.jpg",
              desc: "camión pipa"
            },
            {
              img: "camion5.jpg",
              desc: "camión pipa"
            }
          ]
        },
        {
          name: "barco",
          instances: [
            {
              img: "ship1.jpg",
              desc: "barco crucero"
            },
            {
              img: "ship2.jpg",
              desc: "barco navegando"
            },
            {
              img: "ship3.jpg",
              desc: "yate de lujo"
            },
            {
              img: "ship4.jpg",
              desc: "yate en agua cristalina"
            },
            {
              img: "ship5.jpeg",
              desc: "lancha con personas a bordo"
            },
            {
              img: "ship6.jpg",
              desc: "toda la familia esta en la lancha"
            },
            {
              img: "ship7.jpg",
              desc: "antiguo barco de velas"
            }
          ]
        }
      ]
    },
    {
      name: "colores",
      instances: [
        {
          name: "rojo",
          instances: [
                {
                    img: "apple2.jpg",
                    desc: "manzana roja"
                },
                {
                    img: "camioneta1.jpg",
                    desc: "camioneta roja"
                },
                {
                    img: "flower2.jpg",
                    desc: "rosa roja"
                },
                {
                    img: "sofa2.jpeg",
                    desc: "sofá rojo"
                }
            ]
        },
        {
          name: "azul",
          instances: [
                {
                    img: "bicycle2.jpg",
                    desc: "bicicleta azul"
                },
                {
                    img: "car3.jpg",
                    desc: "carro azul"
                },
                {
                    img: "fan2.jpg",
                    desc: "abanico azul"
                }
            ]
        },
        {
          name: "verde",
          instances: [
                {
                    img: "apple1.jpg",
                    desc: "manzana verde"
                },
                {
                    img: "forest1.jpg",
                    desc: "los árboles son verdes"
                }
            ]
        },
        {
          name: "amarillo",
          instances: [
                {
                    img: "banana2.jpg",
                    desc: "el banano es amarillo"
                },
                {
                    img: "mango2.jpg",
                    desc: "los mangos son amarillos"
                },
                {
                    img: "volquete1.jpg",
                    desc: "el camión es amarillo"
                }
            ]
        }
      ]
    },
    {
      name: "familia",
      instances: [
             {
                name: "familia",
                instances: [
                    {
                        img: "fam1.jpg",
                        desc: "papa y mama jovenes"
                    }
                ]
            },
            {
                name: "papa",
                instances: [
                    {
                        img: "fam1.jpg",
                        desc: "papa con mama"
                    }
                ]
            },
            {
                name: "mama",
                instances: [
                    {
                        img: "fam1.jpg",
                        desc: "mama con papa"
                    }
                ]
            }
        ]
    },
    {
      name: "naturaleza",
      instances: [
        {
          name: "flor",
          instances: [
            {
              img: "flower1.jpg",
              desc: "muchas flores de todos colores"
            },
            {
              img: "flower2.jpg",
              desc: "rosa roja"
            },
            {
              img: "flower3.jpg",
              desc: "flores rojas"
            }
          ]
        },
        {
          name: "playa",
          instances: [
                {
                    img: "beach1.jpg",
                    desc: "playa"
                },
                {
                    img: "beach2.jpg",
                    desc: "playa"
                }
            ]
        },
        {
          name: "bosque",
          instances: [
                {
                    img: "forest1.jpg",
                    desc: "bosque"
                },
                {
                    img: "forest2.jpg",
                    desc: "bosque"
                }
            ]
        },
        {
          name: "montaña",
          instances: [
            {
              img: "mountain1.jpeg",
              desc: "montaña"
            },
            {
              img: "mountain2.jpg",
              desc: "montaña"
            }
          ]
        },
        {
          name: "lluvia",
          instances: [
              {
                img: "rain1.jpg",
                desc: "lluvia"
              },
              {
                img: "rain2.jpg",
                desc: "la gente se moja bajo la lluvia"
              }
            ]
        },
        {
          name: "relámpago",
          instances: [
            {
              img: "thunder1.jpg",
              desc: "relámpago"
            },
            {
              img: "thunder2.jpg",
              desc: "relámpago"
            }
          ]
        },
        {
          name: "sol",
          instances: [
            {
              img: "sun1.jpg",
              desc: "sol"
            },
            {
              img: "sun2.jpg",
              desc: "sol"
            },
            {
              img: "sun3.jpg",
              desc: "sol"
            },
            {
              img: "sun4.jpg",
              desc: "sol"
            }
          ]
        },
        {
          name: "luna",
          instances: [
            {
              img: "moon1.jpg",
              desc: "luna llena"
            },
            {
              img: "moon2.jpg",
              desc: "luna llena"
            }
          ]
        },
        {
          name: "fuego",
          instances: [
            {
              img: "fire1.jpg",
              desc: "fogata"
            },
            {
              img: "fire2.jpg",
              desc: "fósforo encendido"
            },
            {
              img: "fire3.jpg",
              desc: "fogata gigantesca"
            },
            {
              img: "fire4.jpg",
              desc: "brasas"
            },
            {
              img: "fire5.jpg",
              desc: "las brasas son muy calientes"
            },
          ]
        },
      ]
    },
    {
      name: "ropa",
      instances: [
        {
          name: "pantalón",
          instances: [
            {
              img: "pant1.jpg",
              desc: "pantalón de vestir de hombre"
            },
            {
              img: "pant2.jpg",
              desc: "pantalón yin"
            },
            {
              img: "pant3.jpg",
              desc: "el bebé lleva un pantalón verde"
            },
            {
              img: "pant4.jpg",
              desc: "dos pantalones para niño"
            }
          ]
        },
        {
          name: "vestido",
          instances: [
            {
              img: "dress1.jpeg",
              desc: "vestido azul de florcitas"
            },
            {
              img: "dress2.jpeg",
              desc: "vestido rosado"
            },
            {
              img: "dress3.jpg",
              desc: "vestido elegante"
            }
          ]
        },
        {
          name: "calcetín",
          instances: [
            {
              img: "socks1.jpg",
              desc: "calcetines de bebé"
            },
            {
              img: "socks2.jpg",
              desc: "calcetines de niña"
            },
            {
              img: "socks3.jpg",
              desc: "calcetines de bebé"
            },
            {
              img: "socks4.jpg",
              desc: "calcetines para niños"
            }
          ]
        },
        {
          name: "calzoncillo",
          instances: [
            {
              img: "boxer1.jpg",
              desc: "calzoncillo negro"
            },
            {
              img: "boxer2.webp",
              desc: "calzoncillos"
            },
            {
              img: "boxer3.jpg",
              desc: "dos calzoncillos de niño"
            },
            {
              img: "boxer4.jpg",
              desc: "cuatro calzoncillos de niño"
            }
          ]
        },
        {
          name: "camisa",
          instances: [
            {
              img: "shirt1.jpg",
              desc: "camisa manga larga de cuadritos"
            },
            {
              img: "shirt2.jpg",
              desc: "camisa celeste"
            },
            {
              img: "shirt3.jpg",
              desc: "camisa azul de puntitos"
            },
            {
              img: "shirt4.jpg",
              desc: "camiseta estilo polo"
            },
            {
              img: "t-shirt1.jpeg",
              desc: "camiseta de los increíbles"
            },
            {
              img: "t-shirt2.jpg",
              desc: "dos camisetas para deporte"
            },
            {
              img: "t-shirt3.jpg",
              desc: "camisetas de colores"
            }
          ]
        },
        {
          name: "zapato",
          instances: [
            {
              img: "shoe1.jpg",
              desc: "zapato deportivo negro"
            },
            {
              img: "shoe2.jpg",
              desc: "zapato de cuero"
            },
            {
              img: "shoe3.jpg",
              desc: "zapatillas de ballet"
            },
            {
              img: "shoe4.jpg",
              desc: "zapato de mujer"
            },
            {
              img: "shoe5.jpg",
              desc: "cuatro zapatos deportivos"
            },
            {
              img: "shoe6.jpeg",
              desc: "zapatito rosado de niña"
            },
            {
              img: "shoe7.jpg",
              desc: "zapatitos de princesa"
            },
            {
              img: "shoe8.png",
              desc: "zapatito de luces"
            },
            {
              img: "shoe9.jpg",
              desc: "zapatos para niño"
            },
            {
              img: "shoe10.webp",
              desc: "zapatos de niña"
            }
          ]
        },
        {
          name: "chaqueta",
          instances: [
            {
              img: "jacket1.jpg",
              desc: "chaqueta negra"
            },
            {
              img: "jacket2.jpg",
              desc: "chaqueta de cuero negra"
            },
            {
              img: "jacket3.jpg",
              desc: "chaqueta de súperman"
            },
            {
              img: "jacket4.jpeg",
              desc: "chaqueta rosada de mini"
            }
          ]
        },
        {
          name: "falda",
          instances: [
            {
              img: "falda1.jpg",
              desc: "falda verde"
            },
            {
              img: "falda2.jpg",
              desc: "falda floreada"
            },
            {
              img: "falda3.jpg",
              desc: "falda de cuadros"
            },
            {
              img: "falda4.jpg",
              desc: "falda azul"
            }
          ]
        }
      ]
    },
    {
      name: "comida",
      instances: [
        {
          name: "huevo",
          instances: [
                {
                    img: "egg1.jpg",
                    desc: "seis huevos"
                },
                {
                    img: "egg2.jpg",
                    desc: "muchos huevos"
                },
                {
                    img: "egg3.jpg",
                    desc: "dos huevos fritos"
                }
            ]
        },
        {
          name: "manzana",
          instances: [
                {
                    img: "apple1.jpg",
                    desc: "manzana verde"
                },
                {
                    img: "apple2.jpg",
                    desc: "manzana roja"
                }
            ]
        },
        {
          name: "banano",
          instances: [
                {
                    img: "banana1.jpg",
                    desc: "bananos"
                },
                {
                    img: "banana2.jpg",
                    desc: "banano"
                }
            ]
        },
        {
          name: "frijoles",
          instances: [
                {
                    img: "bean1.jpg",
                    desc: "frijoles"
                },
                {
                    img: "bean2.jpg",
                    desc: "frijoles"
                }
            ]
        },
        {
          name: "pan",
          instances: [
                {
                    img: "bread1.jpg",
                    desc: "barra de pan"
                },
                {
                    img: "bread2.jpg",
                    desc: "barra de pan"
                }
            ]
        },
        {
          name: "mango",
          instances: [
                {
                    img: "mango1.jpg",
                    desc: "tres mangos maduros"
                },
                {
                    img: "mango2.jpg",
                    desc: "cuatro mangos maduros"
                }
            ]
        },
        {
          name: "leche",
          instances: [
                {
                    img: "milk1.jpg",
                    desc: "vaso de leche"
                },
                {
                    img: "milk2.jpg",
                    desc: "la persona se sirve una taza de leche"
                }
            ]
        },
        {
          name: "piña",
          instances: [
                {
                    img: "pineapple1.jpg",
                    desc: "piña"
                },
                {
                    img: "pineapple2.jpg",
                    desc: "piña"
                }
            ]
        },
        {
          name: "queso",
          instances: [
                {
                    img: "cheese1.jpeg",
                    desc: "queso"
                },
                {
                    img: "cheese2.jpg",
                    desc: "queso"
                }
            ]
        },
        {
          name: "arroz",
          instances: [
                {
                    img: "rice1.jpg",
                    desc: "arroz"
                },
                {
                    img: "rice2.jpg",
                    desc: "arroz"
                }
            ]
        }
      ]
    }
  ]
};
