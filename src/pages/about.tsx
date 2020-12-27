import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import MichelleImg from '../content/img/pages/liz-michelle-nbd.jpg';

import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About Liz</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>By Day</h5>

                <p>Hey there! I'm Liz. I'm a Senior Software Engineer at <a href="https://www.hubspot.com" target="_blank">HubSpot</a> working on the <a href="https://canvas.hubspot.com" target="_blank">Canvas design system</a>, a React-based design system used by hundreds of engineers, designers, content producers, and more. Given hundreds of people rely on this system, I aim for performance and reliabilty in any code I ship, and bring these best practices to the forefront in any code-related articles in this blog.</p>

                <p><img src={MichelleImg} alt="Friends and I flexing with Michelle Obama, NBD." className="float-right" />I love teaching code and pride myself in creating courses with real-world, tangible examples to illustrate seemingly-mystifying concepts. I'm a fan of technical author <a href="https://adit.io/" target="_blank">Aditya Bhargava</a>'s playful, approachable writing style and try my damndest to emulate that. I believe that every seemingly-complicated concept (specific algorithms, machine learning, you name it) can be broken down and explained in an approachable, inviting manner. In doing so, the teacher will become a better engineer/developer and well-rounded helpful person. That's my hope with this blog!</p>

                <p>Through my teaching career, I've been involved with wonderful educational organizations like <a href="https://generalassemb.ly/" target="_blank">General Assembly</a>, <a href="https://www.womenwhocode.com/" target="_blank">Women Who Code</a>, and <a href="https://www.girldevelopit.com" target="_blank">Girl Develop It</a>, among others. I founded the Boston chapter of <a href="https://www.hiretechladies.com/">Tech Ladies</a>.</p>

                <h5>By Night</h5>
                <p>I have always loved <em>making things</em>. I have a tendency to look at the things around me and think "I could make that." As you can imagine, that can balloon into a lot of different <em>things</em>. This blog aims to catalog all my various construction pursuits.</p>

                <p>On a personal level, I absolutely love coding. Even though, yes, it's my day job, I often spend the weekends hacking around with some technology or another I haven't fiddled around with yet. I got my first taste of code when I was a preteen building online games and deploying them over FTP on a dial-up connection (😱 the horror).</p>

                <p>Some other things I enjoy include:</p>

                <ul>
                  <li>Strategy board games, notably <a href="http://awakenrealms.com/games/nemesis/" target="_blank">Nemesis</a>, <a href="https://boardgamegeek.com/boardgame/169786/scythe" target="_blank">Scythe</a>, or chess</li>
                  <li>Halloween and spooky costumes</li>
                  <li>Exercising — weightlifing and strength training being my favorite 💪</li>
                  <li>Traveling the world. <a href="https://www.atlasobscura.com/" target="_blank">Atlas Obscura</a> is my go-to site for tourist recommendations — it's a treasure trove of lesser-known attractions with quirky backstories.</li>
                  <li>Thrifting and upcycling</li>
                  <li>Museums</li>
                  <li>The 1979 film <em><a href="https://www.imdb.com/title/tt0078748/" target="_blank">Alien</a></em></li>
                </ul>

                <p>Nice to e-meet you!</p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
