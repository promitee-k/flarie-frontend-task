import { render, cleanup, screen, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';
import { ContainerStyled } from './styled';
import { gameConfig } from '../../config/game-config';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  const originalInnerWidth = window.innerWidth;
  const maxWidth = gameConfig.container.maxWidth;
  const maxHeight = gameConfig.container.maxHeight;

  render(<GameBox children={undefined} />);

  const gamebox = screen.getByTestId(TestElement.GAME_BOX);

  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    window.innerWidth = 1000;
    window.innerHeight = 1000;

    render(<GameBox children={undefined} />);

    expect(gamebox).toHaveStyle({
      height: '640px',
      width: '360px',
    });
    window.innerWidth = originalInnerWidth;
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    window.innerHeight = 1000;
    window.innerWidth = 300;

    expect(gamebox).toHaveStyle({
      width: '300px',
    });

    window.innerWidth = originalInnerWidth;
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    window.innerWidth = 1000;
    window.innerHeight = 600;

    expect(gamebox).toHaveStyle({ height: '600px' });
  });

  window.innerWidth = originalInnerWidth;
});
