import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/Header';
import CreatePost from '../../../components/ui/CreatePost';
import GamePost from '../../../components/ui/GamePost';
import BacklogStatusPost from '../../../components/ui/BacklogStatusPost';
import GameSuggestion from '../../../components/ui/GameSuggestion';
import TrendingGame from '../../../components/ui/TrendingGame';
import SidebarSection from '../../../components/layout/SidebarSection';
import MainLayout, { LeftSidebar, Feed, RightSidebar } from '../../../components/layout/MainLayout';
import { posts, gameSuggestions, trendingGames, genres } from '../../../data/index';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const GenreSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const GenreTag = styled.span`
  background-color: #252525;
  color: #e0e0e0;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #64ffda;
    color: #121212;
  }
`;

const Home = () => {
  const [shuffledPosts, setShuffledPosts] = useState([]);
  const [randomSuggestions, setRandomSuggestions] = useState([]);
  const [randomTrendingGames, setRandomTrendingGames] = useState([]);

  useEffect(() => {
    // Função para misturar array (Fisher-Yates shuffle algorithm)
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    
    // Mistura os posts apenas uma vez quando o componente montar
    setShuffledPosts(shuffleArray(posts));
    
    // Seleciona 2 jogos aleatórios para sugestão
    const shuffledGames = shuffleArray(gameSuggestions);
    setRandomSuggestions(shuffledGames.slice(0, 2));
    
    // Seleciona 6 jogos aleatórios para trending (mantendo alguns negativos para variedade)
    const shuffledTrending = shuffleArray(trendingGames);
    setRandomTrendingGames(shuffledTrending.slice(0, 6));
  }, []);

  const renderPost = (post) => {
    switch (post.type) {
      case 'backlog-status':
        return <BacklogStatusPost key={post.id} post={post} />;
      case 'review':
      default:
        return <GamePost key={post.id} post={post} />;
    }
  };

  return (
    <HomeContainer>
      <Header />
      <MainLayout
        leftSidebar={
          <LeftSidebar>
            <SidebarSection title="PARA VOCÊ">
              {randomSuggestions.map((game, index) => (
                <GameSuggestion key={index} game={game} />
              ))}
              <GenreSection>
                {genres.map(genre => (
                  <GenreTag key={genre}>{genre}</GenreTag>
                ))}
              </GenreSection>
            </SidebarSection>
          </LeftSidebar>
        }
        feed={
          <Feed>
            <CreatePost />
            {shuffledPosts.map(renderPost)}
          </Feed>
        }
        rightSidebar={
          <RightSidebar>
            <SidebarSection title="JOGOS EM ALTA">
              {randomTrendingGames.map((game, index) => (
                <TrendingGame key={game.id} game={game} rank={index + 1} />
              ))}
            </SidebarSection>
          </RightSidebar>
        }
      />
    </HomeContainer>
  );
};

export default Home;
