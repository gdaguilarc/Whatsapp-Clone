import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Container = styled(Toolbar)`
  background-color: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  line-height: 40px;
` as typeof Toolbar;

const ChatsNavBar: React.FC = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Container>
          <Typography variant="h6" color="inherit">
            Whatsapp Clone
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
};

export default ChatsNavBar;
