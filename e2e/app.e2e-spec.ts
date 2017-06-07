import { ShopPage } from './app.po';

describe('shop App', () => {
  let page: ShopPage;

  beforeEach(() => {
    page = new ShopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
