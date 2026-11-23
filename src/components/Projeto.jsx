import { useState } from 'react';

export default function Projeto({ nome, descricao }) {
const [mostrarDescricao, setMostrarDescricao] = useState(true);

return (
    <div className="projeto">
    <h3>{nome}</h3>

    {mostrarDescricao && <p>{descricao}</p>}

    <button
        type="button"
        onClick={() => setMostrarDescricao(!mostrarDescricao)}
    >
        {mostrarDescricao ? 'Ocultar descrição' : 'Mostrar descrição'}
    </button>
    </div>
);
}
