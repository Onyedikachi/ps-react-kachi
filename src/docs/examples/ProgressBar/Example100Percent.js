import React from 'react';
import ProgressBar from 'ps-react-kachi/ProgressBar';

/** 100% progress and height of 25px */
export default function Example100Percent() {
  return <ProgressBar percent={100} width={150} height={25} />
}