import { render,cleanup,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  render(<StartButton/>)
  const startButton = screen.getByTestId(TestElement.START_BUTTON)
  it('SHOULD Render StartButton with proper config', () => {
    expect(startButton).toHaveStyle({
      backgroundColor: '#34d399',
      color: '#022c22',
      position: 'absolute',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
      fontWeight: 'bold',
      top: gameConfig.startButton.offsetTop,
      borderRadius: gameConfig.startButton.borderRadius,
      height: gameConfig.startButton.height,
      width: gameConfig.startButton.width,
      fontSize: gameConfig.startButton.fontSize,
    })
  });

  it('SHOULD Render StartButton with click event', () => {
    expect(startButton).toHaveAttribute('onClick')
  });
});
