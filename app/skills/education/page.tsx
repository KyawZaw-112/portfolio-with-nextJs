import React from 'react'
import skillDatas from './api';

type Props = {}
const [skillData] = skillDatas;

const skillPage = (props: Props) => {
    // console.log(skillDatas[1].title);
    
  return (
    <div>
        {skillDatas.map((skill,id) =>{
            return (
                <p key = {id}>{skill.title}</p>
            )
        })}
    </div>
  )
}

export default skillPage;