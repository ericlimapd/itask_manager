class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    concluida: boolean;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.concluida = false;
    }

    renderizar(): HTMLLIElement {
        const li = document.createElement('li');
        li.classList.add('tarefa-card');

        li.innerHTML = `
        <input type="checkbox" class="tarefa-check">
        <b>${this.titulo}</b>
        <p>${this.descricao}</p>
        <small>${this.dataCriacao.toLocaleString()}</small>
        `;

        const checkbox = li.querySelector('.tarefa-check') as HTMLInputElement;
        checkbox.addEventListener('change', () => {
            this.concluida = checkbox.checked;
            li.classList.toggle('concluida', this.concluida);
        });

        return li;
    }
}

const tituloInput = document.getElementById('tituloInput') as HTMLInputElement;
const descricaoInput = document.getElementById('descricaoInput') as HTMLTextAreaElement;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
const lista = document.getElementById('lista') as HTMLUListElement;

addBtn.addEventListener('click', () => {
    if (tituloInput.value.trim() === '') return;

    const novaTarefa = new Tarefa(tituloInput.value, descricaoInput.value);
    lista.appendChild(novaTarefa.renderizar());

    tituloInput.value = '';
    descricaoInput.value = '';
});
