import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

export default function ScrollToBottom () {
  const {pathName} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])
};


