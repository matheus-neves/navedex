import React from 'react';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, NaversHeader, NaversList } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />

        <main>
          <NaversHeader>
            <h1>Navers</h1>

            <button type="button">Adicionar Naver</button>
          </NaversHeader>

          <NaversList>
            <li>
              <img src="" alt="Juliano Reis" />
              <strong>Juliano Reis</strong>
              <p>Front-end Developer</p>
              <div>
                <button type="button">
                  <FaTrash />
                </button>
                <button type="button">
                  <MdEdit size={18} />
                </button>
              </div>
            </li>
          </NaversList>
        </main>
      </Container>
    </>
  );
};

export default Home;
