export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  ogImage?: string;
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
  mailchimpAction: string;
  /**
   * the hidden input field for the list ID
   */
  mailchimpListId?: string;
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
  title: 'Liz Makes Things',
  description: 'Software engineering, crafts, upcycling, and all manner of constructable things.',
  coverImage: 'img/pages/space.jpg',
  ogImage: 'img/pages/og-image.jpg',
  logo: 'img/logo-lizmakesthings.png',
  lang: 'en',
  siteUrl: 'https://www.liz.show',
  // facebook: 'https://www.facebook.com/ghost',
  // twitter: 'https://twitter.com/tryghost',
  showSubscribe: true,
  mailchimpAction: 'https://liz-show-mailchimp.herokuapp.com/subscribe',
  mailchimpListId: '2f52a7be1f',
  // googleSiteVerification: 'GoogleCode',
  // footer: 'is based on Gatsby Casper',
};

export default config;
