var listaCompras = angular.module('listaCompras',[]);

listaCompras.controller('IndexCtrl', function () {
    var vm = this;

    vm.inputProduto = null;

    vm.produtos = [
        {name: 'Arroz'},
        {name: 'Macarrão'},
        {name: 'Leite'}
    ];

    /* Função para adiciona produto*/
    vm.addProduto = function () {
        vm.produtos.push({name: vm.inputProduto});
        vm.inputProduto = null;
    }

    /* Função para remover produto*/
    vm.removeProduto = function (produto) {
        var index = vm.produtos.indexOf(produto);
        vm.produtos.splice(index, 1);
    }

});

