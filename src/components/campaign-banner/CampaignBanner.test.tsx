import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  render(<CampaignBanner />);
  const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
  const top_gameconfg = gameConfig.campaignBanner.offsetTop;
  const borderRadius_gameconfg = gameConfig.campaignBanner.borderRadius;
  const width = gameConfig.campaignBanner.width;
  const padding = gameConfig.campaignBanner.padding;
  const backgroundColor = gameConfig.campaignBanner.background;
  const color = gameConfig.campaignBanner.textColor;
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    expect(campaignBanner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    window.innerWidth = 250;
    expect(campaignBanner).toHaveStyle({
      width: '80%',
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    window.innerHeight = 600;
    expect(campaignBanner).toHaveStyle({
      width: '80%',
    });
  });
});
