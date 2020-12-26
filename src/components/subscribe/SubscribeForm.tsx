import { lighten, saturate } from 'polished';
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import config from '../../website-config';

export const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);

  const handleChange = evt => setEmail(evt.target.value);

  const handleSubmit = async evt => {
    evt.preventDefault();

    const body = JSON.stringify({
      email,
      listId: config.mailchimpListId,
    });

    fetch(config.mailchimpAction, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body,
    }).then(async res => res.json())
      .then(res => {
        setResponseType(res.type);
        setMessage(res.message);
      }).catch(res => res.json(),
      ).catch(res => {
        // TODO: Sentry
        setResponseType(res.type);
        setMessage(res.message);
      });
  };

  return (
    <>
      <form
        css={SubscribeFormStyles}
        action={config.mailchimpAction}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="subscribe-form"
        onSubmit={handleSubmit}
      >
        <FormGroup className="form-group">
          <SubscribeEmail
            className="subscribe-email"
            name="email"
            type="email"
            placeholder="youremail@example.com"
            onChange={handleChange}
          />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="hidden" name={config.mailchimpListId} tabIndex={-1} />
          </div>

        </FormGroup>
        <SubscribeFormButton type="submit" disabled={responseType === 'success'}>
          <span>Subscribe</span>
        </SubscribeFormButton>

      </form>
      {message && <Message responseType={responseType} dangerouslySetInnerHTML={{ __html: message }} />}
    </>
  );
};

const Message = styled(({ responseType: __responseType, ...rest }) => (
  <div {...rest} />
))`
  display: ${({ responseType }) => responseType ? 'block' : 'none'};
  margin: 1em auto 0;
  max-width: 400px;
  color: ${({ responseType }) => responseType === 'error' ? '#f05230' : '#98c22e'};
  font-size: 1.6rem;
  line-height: 1.5em;
  text-align: center;
`;

const SubscribeFormStyles = css`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 460px;

  @media (max-width: 500px) {
    flex-direction: column;

    .form-group {
      flex-direction: column;
      width: 100%;
    }
  }
`;

const SubscribeEmail = styled.input`
  display: block;
  padding: 10px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.lightgrey)} 1px solid;
  /* color: var(--midgrey); */
  color: ${colors.lightgrey};
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: normal;
  user-select: text;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;

  :focus {
    outline: 0;
    /* border-color: color(var(--lightgrey) l(-2%)); */
    border-color: ${lighten('-0.02', colors.lightgrey)};
  }

  @media (prefers-color-scheme: dark) {
    /* border-color: color(var(--darkmode) l(+6%)); */
    border-color: ${lighten('0.06', colors.darkmode)};
    color: rgba(255, 255, 255, 0.9);
    /* background: color(var(--darkmode) l(+3%)); */
    background: ${lighten('0.03', colors.darkmode)};

    :focus {
      /* border-color: color(var(--darkmode) l(+25%)); */
      border-color: ${lighten('0.25', colors.darkmode)};
    }
  }
`;

const SubscribeFormButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 0 0 10px;
  padding: 0 20px;
  height: 43px;
  outline: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 39px;
  font-weight: 400;
  text-align: center;
  /* background: linear-gradient(
    color(var(--blue) whiteness(+7%)),
    color(var(--blue) lightness(-7%) saturation(-10%)) 60%,
    color(var(--blue) lightness(-7%) saturation(-10%)) 90%,
    color(var(--blue) lightness(-4%) saturation(-10%))
  ); */
  /* background: linear-gradient(
    ${lighten('0.07', colors.blue)},
    ${saturate('-0.1', lighten('-0.07', colors.blue))} 60%,
    ${saturate('-0.1', lighten('-0.07', colors.blue))} 90%,
    ${saturate('-0.1', lighten('-0.04', colors.blue))}
  ); */
  background: linear-gradient(#4fb7f0, #29a0e0 60%, #29a0e0 90%, #36a6e2);
  border-radius: 5px;

  -webkit-font-smoothing: subpixel-antialiased;

  :active,
  :focus {
    /* background: color(var(--blue) lightness(-9%) saturation(-10%)); */
    background: ${saturate('-0.1', lighten('-0.09', colors.blue))};
  }
  :disabled {
    background: ${colors.midgrey};
    cursor: not-allowed;
  }
  @media (max-width: 500px) {
    margin: 10px 0 0 0;
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.9;
  }
`;

const FormGroup = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

