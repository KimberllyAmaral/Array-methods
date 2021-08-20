// Interação com Arrays

// forEach - interage com cada item do array
// Lógica - Nesta função ele passa por cada item, mostra o item e o index (posição no array).

[1,2,3].forEach(function(item,index) {
    console.log(item,index);
});


// map - interage com cada item do array e substitui cada item do array pelo resultado da intereção.
// Lógica - Nesta função o map passa pelo array three com a função de parâmetro ITEM. Em seguida, ele retorna substituindo cada item do array pelo seu próprio resultado multiplicado por 2.

const three = [1, 2, 3];
const doubled = three.map(function (item) {
    return item * 2;
});
console.log(doubled);

// filter - verifica da item do array com uma condição (true ou false), se a condição for verdadeira, o filter retorna o item dentro do array, se for falso ele não retorna o item no array.
// Lógica - O array INTS é filtrado passando a função de parâmetro ITEM. O filter só vai retornar os itens que divididos por 2 tiverem tiverem o resto 0.

const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
})
console.log(evens);

// reduce - interage com o cada item do array e passa o resultado para o próximo item do mesmo array. O número 0 no final da função define em qual item do array vai começar a lógica. Se o número não for definido a lógica começa no primeiro item do array automaticamente.
// Lógica - Nesta função o REDUCE passa por cada item do array, pega o RESULTADO e soma com o valor do próximo item. 

const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
},0);
console.log(sum);

// some - verifica de algum item do array atende a condição. Se pelo menos algum dos itens atender, a condição será verdadeira. Se não, a condição é falsa.
// Lógica - SOME retorna TRUE se algum dos números no array for negativo.
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
})
console.log(hasNegativeNumbers);

// every - Similar ao SOME, porém EVERY exige que todos os itens do array se apliquem a condição. Se todos os itens se aplicarem, a condição retorna verdadeira. Se algum dos itens não atenderem a condição, o retorno é falso.
// Lógica - every verifica se todos os itens do array é maior que zero, se sim, o retorno é verdadeiro. (Com EVERY  é tudo ou nada kk)

const allPositiveNumbers = [1, 2, 3].every(function (item) {
    return item > 0;
});
console.log(allPositiveNumbers);

// find - verifica cada item do array com uma condição, se a condição for verdadeira, ele retorna o item do array. Se nenhum item se encaixar a condição ele retorna 'undefined'
// Lógica - FIND esta passando por cada objeto da constante verificando se o 'id' tem valor de 'b'. Se sim, ele esta retornando o objeto.

const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function (item) {
    return item.id ==='b';
});
console.log(found);



// find index - verifica cada item do array com uma condição, se a condição for verdadeira, ele retorna a posição do item (o index).
// Lógica - FINDINDEX esta passando por cada objeto da constante verificando se o 'id' tem valor de 'b'. Se sim, ele esta retornando a posição do item (index).

const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const foundIndex = objects.findIndex(function (item) {
    return item.id ==='b';
});
console.log(foundIndex);

// includes - verifica se o array possui um item específico, se possuir retorna true, se não false.

console.log( [ 1, 2, 3 ].includes( 2 ) );

