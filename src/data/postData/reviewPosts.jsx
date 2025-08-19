import React from 'react';

export const reviewPosts = [
  {
    id: 2,
    type: 'review',
    game: {
      title: "Elden Ring",
      coverImage: "https://cdn.mobygames.com/covers/10722526-elden-ring-playstation-5-front-cover.jpg"
    },
    review: {
      subtitle: "Uma obra-prima que redefine o gênero",
      content: (
        <>
          <p>Depois de 150 horas explorando as Terras Intermédias, posso dizer com segurança que Elden Ring é a evolução perfeita da fórmula Souls. O mundo aberto é absolutamente deslumbrante e recompensador para explorar.</p>
          
          <img 
            src="https://images.rpgsite.net/image/da49c9a1/135299/original/Elden-Ring-Shadow-of-the-Erdtree_20230221_04.png" 
            alt="Explorando as Terras Intermédias" 
            style={{ width: '100%', borderRadius: '10px', margin: '15px 0' }}
          />
          
          <p>A liberdade de exploração combinada com a desafiadora jogabilidade da FromSoftware cria uma experiência única. Cada nova área descoberta traz surpresas e desafios emocionantes.</p>
          
          <p>O combate é preciso e recompensador, com inúmeras opções de builds que permiten personalizar completamente sua experiência de jogo. A progressão de personagem é satisfatória e te faz sentir cada vez mais poderoso.</p>
        </>
      ),
      type: "analysis"
    },
    user: {
      username: "MariaSilva",
      avatar: "https://i.pravatar.cc/30?img=1"
    },
    reactions: {
      "👍": 42,
      "❤️": 28,
      "😲": 15,
      "🎮": 37
    },
    comments: [
      {
        id: 1,
        user: {
          username: "CarlosGamer",
          avatar: "https://i.pravatar.cc/30?img=5"
        },
        text: "Concordo plenamente! A batalha contra o Radahn foi uma das melhores experiências que já tive em jogos. A sensação de derrotar ele depois de 20 tentativas foi incrível!",
        reactions: {
          "👍": 8,
          "❤️": 3,
          "🎮": 2
        }
      },
      {
        id: 2,
        user: {
          username: "JoaoGameplays",
          avatar: "https://i.pravatar.cc/30?img=8"
        },
        text: "Ótima análise! Mas discordo sobre a dificuldade, achei mais acessível que os Dark Souls. A possibilidade de explorar e upar em outras áreas ajuda muito!",
        reactions: {
          "❤️": 5,
          "👍": 3
        }
      },
      {
        id: 3,
        user: {
          username: "AnaGamer",
          avatar: "https://i.pravatar.cc/30?img=3"
        },
        text: "A construção de mundo é fenomenal! Cada dungeon secreta, cada chefe opcional... tudo é tão bem feito!",
        reactions: {
          "👍": 12,
          "😲": 4
        }
      }
    ]
  },
  {
    id: 6,
    type: 'review',
    game: {
      title: "Hades II",
      coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co888c.jpg"
    },
    review: {
      subtitle: "Supergiant acertou novamente",
      content: (
        <>
          <p>Primeiras impressões após 10 horas: A arte é ainda mais linda que a do primeiro jogo! A nova protagonista Melinoë tem movimentos fluidos e poderes interessantes que trazem uma dinâmica fresca ao combate.</p>
          
          <img 
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/hades-2/e/e3/Melinoe_II.jpg?width=1280" 
            alt="Melinoë em ação" 
            style={{ width: '100%', borderRadius: '10px', margin: '15px 0' }}
          />
          
          <p>O sistema de magia adiciona uma nova camada estratégica aos combates. As runas e feitiços são intuitivos de usar mas com profundidade suficiente para recompensar o domínio.</p>
          
          <p>Estou ansiosa para see como os relacionamentos com os deuses vão se desenvolver! A escrita continua excelente, com diálogos afiados e personagens carismáticos.</p>
          
          <img 
            src="https://images.ctfassets.net/5owu3y35gz1g/5NeYWHj7067xBa0a0GQOXu/8b9c8cf29b57db2624e4199f87377878/hades2_apr30_10.jpg?w=1920&q=80" 
            alt="Personagens de Hades II" 
            style={{ width: '100%', borderRadius: '10px', margin: '15px 0' }}
          />
          
          <p>A progressão de roguelike está ainda mais refinada, com upgrades significativos que fazem cada corrida sentir-se única e recompensadora.</p>
        </>
      ),
      type: "Diário"
    },
    user: {
      username: "AnaGamer",
      avatar: "https://i.pravatar.cc/30?img=3"
    },
    reactions: {
      "👍": 87,
      "❤️": 65,
      "😲": 24,
      "🎮": 42
    },
    comments: [
      {
        id: 1,
        user: {
          username: "PedroGames",
          avatar: "https://i.pravatar.cc/30?img=10"
        },
        text: "Estou amando também! A trilha sonora está incrível como sempre. Darren Korb não erra!",
        reactions: {
          "👍": 8,
          "❤️": 5,
          "🎵": 3
        }
      },
      {
        id: 2,
        user: {
          username: "MariaSilva",
          avatar: "https://i.pravatar.cc/30?img=1"
        },
        text: "Concordo! A evolução do combate é sensacional. As opções táticas são muito mais variadas que no primeiro.",
        reactions: {
          "👍": 6,
          "🎮": 2
        }
      },
      {
        id: 3,
        user: {
          username: "JoaoGameplays",
          avatar: "https://i.pravatar.cc/30?img=8"
        },
        text: "Alguém já experimentou a build de feitiços de gelo? Está absurdamente broken!",
        reactions: {
          "😲": 7,
          "👍": 4
        }
      }
    ]
  },
  {
    id: 7,
    type: 'review',
    game: {
      title: "Kirby and the Forgotten Land",
      coverImage: "https://cdn.mobygames.com/covers/6547361-kirby-and-the-forgotten-land-nintendo-switch-front-cover.jpg"
    },
    review: {
      subtitle: "Kirby em 3D finalmente funciona!",
      content: (
        <>
          <p>Nintendo acertou em cheio na transição do Kirby para o mundo 3D. Os níveis são criativos e a jogabilidade é tão satisfatória quanto nos jogos 2D, mantendo a essência charmosa da série.</p>
          
          <img 
            src="https://m.media-amazon.com/images/I/81fC3-QCbGL.jpg" 
            alt="Kirby explorando o mundo 3D" 
            style={{ width: '100%', borderRadius: '10px', margin: '15px 0' }}
          />
          
          <p>A habilidade de mouthful mode onde o Kirby engole objetos inteiros é hilária e adiciona muita variedade aos puzzles. Cada transformação traz mecânicas únicas e divertidas de se experimentar.</p>
          
          <p>O level design é excelente, com segredos bem escondidos que recompensam a exploração. A dificuldade progressiva torna o jogo acessível para jogadores casuais mas ainda desafiador para os fãs hardcore.</p>
          
          <img 
            src="https://cdn.mos.cms.futurecdn.net/yLBjdyb2EAwR6apFkqTLsh.jpg" 
            alt="Kirby usando mouthful mode" 
            style={{ width: '100%', borderRadius: '10px', margin: '15px 0' }}
          />
          
          <p>Os chefes são criativos e as fases bônus adicionam boa variedade. Uma transição para 3D extremamente bem-sucedida!</p>
        </>
      ),
      type: "analysis"
    },
    user: {
      username: "LucasNintendo",
      avatar: "https://i.pravatar.cc/30?img=12"
    },
    reactions: {
      "👍": 124,
      "❤️": 89,
      "😲": 45,
      "🎮": 67
    },
    comments: [
      {
        id: 1,
        user: {
          username: "AnaGamer",
          avatar: "https://i.pravatar.cc/30?img=3"
        },
        text: "Perfeito para jogar relaxado depois de uma sessão intensa de Elden Ring haha!",
        reactions: {
          "👍": 15,
          "😄": 8
        }
      },
      {
        id: 2,
        user: {
          username: "CarlosGamer",
          avatar: "https://i.pravatar.cc/30?img=5"
        },
        text: "O modo cooperativo é ótimo para jogar com a patroa que não é muito de games!",
        reactions: {
          "❤️": 12,
          "👍": 7
        }
      },
      {
        id: 3,
        user: {
          username: "PedroJogos",
          avatar: "https://i.pravatar.cc/30?img=12"
        },
        text: "Alguém já pegou todas as figurinhas? Tô com 98% e não acho as últimas!",
        reactions: {
          "😲": 5,
          "👍": 3
        }
      }
    ]
  }
];
