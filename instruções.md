# Instruções

1. Você deve criar uma projeto no GitHub com diretorios distintos para cada uma das questões.
2. Você deve usar Node.js 16.20.2 + TypeScript 4.5.4.
3. Entrega: 02/10 até às 12h

## Crie uma função que dado um objeto qualquer, de forma aninhada, retorne o objeto sem as chaves com valores nulos ou vazios. Lembre-se o objeto pode possuir listas com elementos nulos. Faça testes de unidade usando a biblioteca de testes que tiver mais familiaridade. Exemplo – Dado

```json
Entrada:
{
    key1: "value1",
    key2: null,
    key3: {
        key4: ["array1"],
        key5: []
    },
}

Saída:
{
    key1: "value1",
    key3: {
        key4: ["array1"]
    },
}
```

## Utilizando React.js, crie uma fase do jogo Lights Out (<https://en.wikipedia.org/wiki/Lights_Out_(game)>), onde ao apagar todas as "luzes" exiba uma mensagem de vitória

A fase:
OOOOO
OOOOO
XOXOX
OOOOO
OOOOO

O: Luz apagada
X: Luz ligada
