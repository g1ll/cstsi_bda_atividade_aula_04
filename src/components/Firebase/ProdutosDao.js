import {
    ref,
    query,
    orderByChild,
    onChildAdded,
    off,
    endAt,
    endBefore,
    equalTo,
    startAt,
    startAfter,
    onValue,
    limitToFirst,
    limitToLast
} from "firebase/database"

function getOrderByChild(order,db,callback){
    //Exemplo
    console.log(order);
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB,orderByChild(order))
    onChildAdded(consulta,callback)
}

function getFilterByChild(filter,value, db,callback){
    //implement aqui
    console.log(filter)
}

function getMostExpensive(db,setValue){
    // implement aqui
     /**
     *     Nesta função é necessário implementar o callback,
     * pois será necessário ordenar os resultados no cliente
     * pelos produtos mais caros (reverso). É necessário chamar 
     * a função setValue() passados como parametro o array com os
     * produtos ordenados pelo preco mais caro. Use os métodos para trabalhar
     * com arrays em JavaScript! Dica: usem reverse() ou unshift().
     * 
     *  */
    const list = [];
    //snapshot.val() ==> Dado
    //snapshot.key ==> hashTimestumpRTDB
    //implementar consulta
    //setValue(list)
}

function getMostCheap(db,callback){
    //implemente aqui
}

function getPriceRange(value, db,callback){//0--->limit
    //implemente aqui
}

export {getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange}
