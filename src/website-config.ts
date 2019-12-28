export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'MakerInterviews',
  description: 'Find out more about the Maker, not just their products.',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://makerinterviews.club',
  // facebook: 'https://www.facebook.com/MakerInterviews',
  twitter: 'https://twitter.com/KameronTanseli',
  showSubscribe: true,
  mailchimpAction: 'https://github.us19.list-manage.com/subscribe/post?u=2b9acd33713c292e506e140b1&amp;id=ff7d1396bd',
  mailchimpName: 'b_2b9acd33713c292e506e140b1_ff7d1396bd',
  mailchimpEmailFieldName: 'EMAIL',
  footer: '',
};

export default config;
