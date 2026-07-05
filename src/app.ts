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
}
