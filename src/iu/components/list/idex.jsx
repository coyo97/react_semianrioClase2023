import React, { useState, useEffect } from 'react';
import './styles.css';

const generateAvatar =(list) =>{
    const avatar=[];
    for(let i=0; i<10;i++){
        const random=Math.floor(Math.random()*100)
        avatar.push(`https://avatars.dicebear.com/api/bottts/stefan${random}.svg`);
    }
    return avatar;
}

const List = () => {
    const [list,setList] = useState(generateAvatar([]));
    useEffect(()=>{
        setList(generateAvatar());
    },[]);
    //setInterval(() =>{
      //  setList(generateAvatar());
    //},10000);

    return <div>
        <h2>List</h2>
        <ul>
            {list.map((item, index) => (
                <li key={index}>
                    <img src={item} />
                </li>
            ))}
        </ul>
    </div>
}

export default List