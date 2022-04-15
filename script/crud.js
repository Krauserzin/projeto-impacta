const d = document; //Documento  
$table = d.querySelector('.crud-table'),
    $form = d.querySelector('.crud-form'),
    $title = d.querySelector('.crud-title'),
    $template = d.getElementById('crud-template').content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let {
        url,
        method,
        sucess,
        error,
        data
    } = options;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', e => {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            sucess(json);
        } else {
            let message = xhr.statusText || 'Ocorreu um erro';
            error(`Erro ${xhr.status} : ${message}`);

        }



    }); //fim do addEventListener

    xhr.open(method || 'GET', url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        url: 'http://localhost:3000/atletas',
        sucess: (res) => {
            console.log(res);

            res.forEach(el => {
                $template.querySelector('.nome').textContent = el.nome;
                $template.querySelector('.idade').textContent = el.idade;
                $template.querySelector('.modalidade').textContent = el.modalidade;
                $template.querySelector('.pontos').textContent = el.pontos;

                //para editar 
                $template.querySelector('.edit').dataset.id = el.id;
                $template.querySelector('.edit').dataset.nome = el.nome;
                $template.querySelector('.edit').dataset.idade = el.idade;
                $template.querySelector('.edit').dataset.modalidade = el.modalidade;
                $template.querySelector('.edit').dataset.pontos = el.pontos;
                //para deletar
                $template.querySelector('.delete').dataset.id = el.id;
                $template.querySelector('.delete').dataset.nome = el.nome;
                $template.querySelector('.delete').dataset.idade = el.idade;
                $template.querySelector('.delete').dataset.modalidade = el.modalidade;
                $template.querySelector('.delete').dataset.pontos = el.pontos;

                console.log(el.nome);
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });

            $table.querySelector('tbody').appendChild($fragment);

        },
        error: (err) => {
            console.log(err);
        }
    })
}
d.addEventListener('DOMContentLoaded', getAll);

// submit do formulario
$form.addEventListener('submit', e => {
    if (e.target === $form) {
        e.preventDefault();
    }
    if (!e.target.id.value) {
        //post - criar dado
        ajax({
            url: 'http://localhost:3000/atletas',
            method: 'POST',
            sucess: (res) => {
                location.reload();
            },
            error: (err) => console.log(err),
            data: {
                nome: e.target.nome.value,
                idade: e.target.idade.value,
                modalidade: e.target.modalidade.value,
                pontos: e.target.pontos.value
            }
        });

    } else {
        //put - atualizar dado
        ajax({
            url: `http://localhost:3000/atletas/${e.target.id.value}`,
            method: 'PUT',
            sucess: (res) => location.reload(),
            error: (res) => console.log(res),
            data: {
                nome: e.target.nome.value,
                idade: e.target.idade.value,
                modalidade: e.target.modalidade.value,
                pontos: e.target.pontos.value
            }
        });
    }

});

// logica editar e deletar
d.addEventListener('click', e => {
    if (e.target.matches('.edit')) {
        $title.textContent = 'Editar dados do atleta';
        $form.nome.value = e.target.dataset.nome;
        $form.idade.value = e.target.dataset.idade;
        $form.modalidade.value = e.target.dataset.modalidade;
        $form.pontos.value = e.target.dataset.pontos;
        $form.id.value = e.target.dataset.id;
        console.table(e.target.dataset);
    }

    if (e.target.matches('.delete')) {
        let isDelete = confirm(`Deseja deletar o atleta ${e.target.dataset.nome}?`);
        if (isDelete) {
            ajax({
                url: `http://localhost:3000/atletas/${e.target.dataset.id}`,
                method: 'DELETE',
                sucess: (res) => location.reload(),
                error: (res) => alert(res)
            })
        }
    }


});