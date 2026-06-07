import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

import { ModelViewer, DinoRunner3D } from '@simo-rudra/rudra-three';
import { User } from 'lucide-react';
import { Badge } from '@simo-rudra/rudra-core';
import { Reveal } from '@simo-rudra/rudra-anim';

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
      <Reveal id="el_1780193504228_1541bx3" direction="up">
      <Badge id="el_1780172014940_owagtzv" icon={<User color="#000000" strokeWidth={1.5} size={18}/>} size="sm" variant="solid">
      </Badge>
      </Reveal>
      <Badge id="el_1780194703954_5pa99kv" size="sm" variant="solid">
      </Badge>
      <Badge id="el_1780194704450_aay3mbe" size="sm" label="Sivasankar" variant="solid">
      </Badge>
      <Badge id="el_1780194704123_vpqzwc4" size="sm" variant="solid">
      </Badge>
      <ModelViewer id="el_1780226984719_1catrsp" style={{}} environment="city">
      </ModelViewer>
      <DinoRunner3D id="el_1780226993702_9txnirx">
      </DinoRunner3D>
    </div>
  );
}
