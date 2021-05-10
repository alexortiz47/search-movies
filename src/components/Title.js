import React from 'react';

// hacemos destructuring de objetos para las props y así queda más limpio
// aquí usamos la prop especial children
export const Title = ({ children }) => (
    <h1 className="title">{children}</h1>
)