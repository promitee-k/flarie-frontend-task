import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';


export const ContainerStyled = styled.div(
  (): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: gameConfig.container.maxWidth,
    height: gameConfig.container.maxHeight,
    maxWidth: gameConfig.container.maxWidth,
    maxHeight: gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
    '@media(max-width: 360px)': {
      height: window.screen.availWidth*1.77,
      width: window.screen.availWidth,
    },
    '@media(min-width: 640px)': {
      height: window.screen.availHeight,
      width: window.screen.availHeight*0.5625,
    },
    
  }),
);
