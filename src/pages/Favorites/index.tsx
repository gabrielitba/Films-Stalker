import { useEffect, useState } from 'react';
import { ImArrowLeft, ImHeartBroken } from 'react-icons/im';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';

import * as S from './styles';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Favorites = () => {
  const [listFavorites, setListFavorites] = useState<Array<FilmeInterface>>([]);

  useEffect(() => {
    setListFavorites(
      JSON.parse(localStorage.getItem('@FilmStalker:Favorites') || '[]'),
    );
  }, []);

  return (
    <S.Container>
      <S.HeaderFavorite>
        <Header />
        <Button url="/">
          Voltar <ImArrowLeft size="0.9rem" style={{ marginLeft: '5px' }} />
        </Button>
      </S.HeaderFavorite>

      <Title
        title="favoritos"
        subtitle="Um espaço para seus filmes favoritos"
      />

      <S.CardContainer>
        {listFavorites.length > 0 ? (
          listFavorites.map((film: FilmeInterface) => (
            <Card
              key={film.id}
              poster_path={film.poster_path}
              filmSelected={film}
            />
          ))
        ) : (
          <S.MessageUnfavorites>
            <h1>Você não adicionou nenhum filme aos favoritos</h1>{' '}
            <ImHeartBroken color="red" size="2rem" />
          </S.MessageUnfavorites>
        )}
      </S.CardContainer>
    </S.Container>
  );
};

export default Favorites;
