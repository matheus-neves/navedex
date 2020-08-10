import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="nave.rs" />
      </Link>

      <button type="button" onClick={signOut}>
        <FiPower size={18} />
        Sair
      </button>
    </Container>
  );
};

export default Header;
