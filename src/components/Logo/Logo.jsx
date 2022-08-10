import React from "react";
import Tilty from "react-tilty";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import styles from './Logo.module.css'

const Logo = () => {
  return (
      <Tilty className={`${styles.logoContainer}`} reset={false}>
      <FontAwesomeIcon icon={faBrain} size="3x"/>
      </Tilty>
  );
};

export default Logo;
