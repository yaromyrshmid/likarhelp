import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from 'react-bootstrap';
import './index.css';
import {Navigation, Screen1, SnakeLogo} from './Content';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Container><SnakeLogo /><Row><Navigation /> <Screen1 /></Row> </Container>, document.getElementById('root'));

serviceWorker.unregister();
