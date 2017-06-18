import React from 'react';
import { render } from 'react-dom';
import {Catalog} from 'catalog';
import Introduction from './docs/Introduction.md';
import Recipe from './docs/Recipe.md';

import '../index.css';


render(
  <Catalog
    title='Recipes Styleguide'
    basePath='/'
    pages={[
      {
        path: '/',
        title: 'Introduction',
        component: Introduction
      },
      {
        title: 'Components',
        pages: [
          {path: 'recipe', title: 'Recipe', component: Recipe}
        ]
      }
    ]}
  />,
  document.getElementById('app')
);
