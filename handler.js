'use strict';
import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from './App';

module.exports.hello = async (event) => {
  const app = ReactDOMServer.renderToString(<App />);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: data.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
        input: event,
      },
      null,
      2
    ),
  };
};
