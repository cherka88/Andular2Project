import { Demo20170210Page } from './app.po';

describe('demo20170210 App', function() {
  let page: Demo20170210Page;

  beforeEach(() => {
    page = new Demo20170210Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
