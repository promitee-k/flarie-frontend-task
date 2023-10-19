import { screen,render,cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  render(<CampaignBanner/>)
  const campaignBanner = screen.getByTestId(TestElement.CAMPAIGN_BANNER)
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    expect(campaignBanner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
      top: gameConfig.campaignBanner.offsetTop,
      borderRadius: gameConfig.campaignBanner.borderRadius,
      width: gameConfig.campaignBanner.width,
      padding: gameConfig.campaignBanner.padding,
      backgroundColor: gameConfig.campaignBanner.background,
      color: gameConfig.campaignBanner.textColor,
    })
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    window.innerWidth = 250
    expect(campaignBanner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
      top: gameConfig.campaignBanner.offsetTop,
      borderRadius: gameConfig.campaignBanner.borderRadius,
      width: gameConfig.campaignBanner.width,
      padding: gameConfig.campaignBanner.padding,
      backgroundColor: gameConfig.campaignBanner.background,
      color: gameConfig.campaignBanner.textColor,
    })
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    window.innerHeight = 600
    expect(campaignBanner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
      top: gameConfig.campaignBanner.offsetTop,
      borderRadius: gameConfig.campaignBanner.borderRadius,
      width: gameConfig.campaignBanner.width,
      padding: gameConfig.campaignBanner.padding,
      backgroundColor: gameConfig.campaignBanner.background,
      color: gameConfig.campaignBanner.textColor,
    })
  });
});
