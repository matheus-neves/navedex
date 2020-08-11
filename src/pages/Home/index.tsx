import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, NaversHeader, NaversList } from './styles';

interface Naver {
  name: string;
  job_role: string;
  url: string;
  id: string;
}

const Home: React.FC = () => {
  const [navers, setNavers] = useState<Naver[]>([]);

  useEffect(() => {
    async function loadNavers(): Promise<void> {
      const response = await api.get<Naver[]>('/navers');
      setNavers(response.data);
    }
    loadNavers();
  }, []);

  return (
    <>
      <Container>
        <Header />

        <main>
          <NaversHeader>
            <h1>Navers</h1>

            <Link to="/create-naver">Adicionar Naver</Link>
          </NaversHeader>

          <NaversList>
            {navers.map(({ id, job_role, name, url }) => (
              <li key={id}>
                <img src={url} alt={name} />
                <strong>{name}</strong>
                <p>{job_role}</p>
                <div>
                  <button type="button">
                    <FaTrash />
                  </button>
                  <button type="button">
                    <MdEdit size={18} />
                  </button>
                </div>
              </li>
            ))}
          </NaversList>
        </main>
      </Container>
    </>
  );
};

export default Home;
