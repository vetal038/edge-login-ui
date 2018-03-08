// @flow
/** @jsx h */

import './style/index.css'

import { h, render } from 'preact'

import { Main } from './Main.js'

// Render the main component to the document body:
const body = document.body
if (body !== null) render(<Main />, body)
