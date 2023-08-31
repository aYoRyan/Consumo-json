document.addEventListener("DOMContentLoaded", async function () {
    async function fetchData() {
        try {
            const response = await fetch('dados.json');
            const data = await response.json();

            const aluno1 = document.getElementById('aluno1');
            const aluno2 = document.getElementById('aluno2');
            const aluno3 = document.getElementById('aluno3');

            data.alunos.forEach(aluno => {
                const alunoCard = document.createElement('div');
                alunoCard.classList.add('aluno-card');
                alunoCard.innerHTML = `
                <h2>${aluno.nome}</h2>
                <p>${aluno.idade}</p>
                <p>${aluno.nota}</p>
                <p>${aluno.disciplinas.join(', ')}</p>`;

                if (aluno.nome === 'João Silva') {
                    aluno1.appendChild(alunoCard);
                } else if (aluno.nome === 'Maria Santos') {
                    aluno2.appendChild(alunoCard);
                } else if (aluno.nome === 'Pedro Almeida') {
                    aluno3.appendChild(alunoCard);
                }
            });
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    fetchData();
});