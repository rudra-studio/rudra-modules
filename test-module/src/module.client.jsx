import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

import { SwapPlayground } from '@rudra-studio/rudra-anim';

export default function CompiledModule(props) {
  const [user, set_user] = useState({"age":27,"name":"sivasankar"});

  const newFunction_1 = useCallback(async (args) => {
    console.log('Executing Client Function: newFunction_1');
    // Client Step: New library function (library_function)
  }, []);

  const onLoadFunction = useCallback(async (args) => {
    console.log('Executing Client Function: onLoadFunction');
    // Client Step: New declare variable (declare_variable)
    // Client Step: New return value (return_value)
  }, []);

  return (
    <div className="rudra-module-wrapper">
      <SwapPlayground id="el_1781059609991_gxgkcg9">
      </SwapPlayground>
    </div>
  );
}
