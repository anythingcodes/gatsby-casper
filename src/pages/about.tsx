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

                <p>I really enjoy strategy board games. Recently I've been on a <a href="http://awakenrealms.com/games/nemesis/" target="_blank">Nemesis</a> kick, though always enjoy an intense session of <a href="https://boardgamegeek.com/boardgame/169786/scythe" target="_blank">Scythe</a> or chess.</p>

                <p>I'm also a huge movie nerd. One of my favorites is the 1979 film <em>Alien</em> (and sci-fi and/or horror in general), so many of my nerdier crafty pursuits are relevant to my favorite films. I'm also a major Halloween fan, tending towards spookier costumes involving lots of craftiness, time, and effort.</p>

                <p>I enjoy exercising and occasionally run half marathons as an excuse to jog through the neighborhoods of a city that's new to me (most recently, Vancouver). Weightlifting and strength training are my favorite kinds of exercise, hands down — I like seeing my strength increase. 💪</p>

                <p>Though I haven't been doing much of it in 2020, I really love traveling. My go-to travel recommendation site is <a href="https://www.atlasobscura.com/" target="_blank">Atlas Obscura</a>, a treasure trove of lesser-known attractions with quirky backstories.</p>

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
