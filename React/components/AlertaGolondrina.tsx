import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


export function AlertaQueSeEsconde() {
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Golondrina creada con éxito!</Alert.Heading>
        </Alert>
      );
    }
}
