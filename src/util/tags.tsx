import React from 'react';
import { Link } from 'gatsby';
import * as _ from 'lodash';

const intersperse = (arr: any[], sep: string) => {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((acc: any[], x: string) => acc.concat([sep, x]), [arr[0]]);
};

export const getTags = (tags, Component = Link, rest = {}) => {
  const tagLinks = tags.map(tag => (
    <Component {...rest} key={tag} to={`/tags/${_.kebabCase(tag)}/`}>
      {tag}
    </Component>
  ));
  return intersperse(tagLinks, ',\u00A0');
};
