'use client'
import Reac,{useState} from 'react'
import SkillPage from './education/page';


type Props = {}

const About = (props: Props) => {
  const [openTab,setOpenTab] = useState(1)
  return (
    <div className=' w-screen h-screen flex justify-center items-center bg-[#364f6b]'>
      <SkillPage />
		</div>
	);
};

export default About;