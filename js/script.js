var test = {
    container: function () {
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.classList.add('container');
    },

    tittle: 'Тест по программированию',
    questions: ['Вопрос №1','Вопрос №2','Вопрос №3'],
    answers: ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],

    createHead: function () {
        var heading = document.createElement('h1');
        var wrapper = document.querySelector('.container');
        heading.innerHTML = this.tittle;
        heading.classList.add('header');
        wrapper.appendChild(heading);
    },

    createQues: function () {
        var p, chk, ul, li, wrapper, textNode;

        for (var i = 0; i < this.questions.length; i++) {
            p = document.createElement('p');
            p.innerHTML = this.questions[i];
            ul = document.createElement('ul');
            wrapper = document.querySelector('.container');
            wrapper.appendChild(p);
            p.appendChild(ul);

            for (var j = 0; j < this.answers.length; j++) {
                li = document.createElement('li');
                chk = document.createElement('input');
                chk.setAttribute('type', 'checkbox');
                textNode = document.createTextNode(this.answers[j]);
                ul.appendChild(li);
                li.appendChild(chk);
                li.appendChild(textNode);
                li.classList.add('list-item');
            }
        }
    },

    createButton: function () {
        var button = document.createElement('button');
        // button.setAttribute('type', 'submit');
        // button.setAttribute('value', 'Проверить результаты');
        button.innerHTML = 'Проверить результаты';
        var wrapper = document.querySelector('.container');
        wrapper.appendChild(button);
        button.classList.add('my-button', 'btn', 'btn-default', 'btn-lg', 'btn-block');
    }
}
test.container();
test.createHead();
test.createQues();
test.createButton();
