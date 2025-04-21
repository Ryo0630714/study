const onClickAdd = () => {
    //テキストボックスの値取得、初期化
    const inputText = document.querySelector('#add-text').value;
    document.querySelector('#add-text').value = '';

    createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
    //li生成
    const li = document.createElement('li');
    //div生成
    const div = document.createElement('div');
    div.className = 'list-row';
    //p生成
    const p = document.createElement('p');
    p.className = 'todo-item';
    p.innerText = todo;

    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        const moveTarget = completeButton.closest('li');
        completeButton.nextElementSibling.remove();
        completeButton.remove();

        const backButton = document.createElement('button');
        backButton.innerText = '戻す';
        backButton.addEventListener('click', () => {
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(todoText);
            backButton.closest('li').remove();
        })
        moveTarget.firstElementChild.appendChild(backButton);

        document.querySelector('#complete-list').appendChild(moveTarget);
    })

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        const deleteTarget = deleteButton.closest('li');
        document.querySelector('#incomplete-list').removeChild(deleteTarget);
    })

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.querySelector('#incomplete-list').appendChild(li);
}

const addBtn = document.querySelector('#add-button');
addBtn.addEventListener('click', onClickAdd);