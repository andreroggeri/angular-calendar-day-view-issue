import { AngularCalendarDvIssuePage } from './app.po';

describe('angular-calendar-dv-issue App', () => {
  let page: AngularCalendarDvIssuePage;

  beforeEach(() => {
    page = new AngularCalendarDvIssuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
