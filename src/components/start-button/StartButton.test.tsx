import { render,cleanup,screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  
  render(<StartButton/>)
  const startButton = screen.getByTestId(TestElement.START_BUTTON)
  const onStartGame_mock = () => {
    alert('You will learn to develop JS games after you join with us! For now, best of luck!');
  };
  it('SHOULD Render StartButton with proper config', () => {
    expect(startButton).toHaveStyle({
      'backgroundColor': '#34d399',
      'color': '#022c22',
      'position': 'absolute',
    })
  });

  it('SHOULD Render StartButton with click event', () => {
    
   fireEvent.click(startButton)
   
  });
});
