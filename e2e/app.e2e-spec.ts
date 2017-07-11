import { NgTplPage } from './app.po';

describe('ng-tpl App', () => {
  let page: NgTplPage;

  beforeEach(() => {
    page = new NgTplPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
