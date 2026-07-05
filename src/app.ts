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

        return li;
    }
}
