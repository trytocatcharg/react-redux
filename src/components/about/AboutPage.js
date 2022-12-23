import React, { useEffect } from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AboutPage = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
        <h2>About </h2>
        <button onClick={notify}>Notify Sample</button>
        <p>Text about</p>
    </div>
  )
}
