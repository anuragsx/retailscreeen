import { RetailscreenPage } from './app.po';

describe('retailscreen App', () => {
  let page: RetailscreenPage;

  beforeEach(() => {
    page = new RetailscreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
