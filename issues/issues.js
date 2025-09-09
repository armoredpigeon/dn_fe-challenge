import React, {useEffect, useState} from 'react';

const grandchildEl = memo(function grandChildEl({name, clickHandler}){
    // some complicated logic
    console.log({name, msg: "rendered or re-rendered"});
    return (<button onClick={clickHandler}>{name}</button>)
});

const childElList = ({dataList, clickHandler})=> {
 return (
    {dataList.map(item => <grandchildEl name={item.name} clickHandler={clickHandler} />)}
 )
}

const parentEl = ({
    name,
    title,
    keyRoot,
    childItems
})=> {
    const [itemsList, setItemsList] = useState([])
    const handleClick = () => {
        console.log("a click happened");
    };
    if(!childItems.length){
        childItems = useChildItems();
    }

    useEffect(()=> {
        setItemsList(childItems);
        console.log("in the useEffect");
    })

    return (<childElList dataList={itemsList} />)
}