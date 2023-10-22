import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import skillData from "./education/api";
import EducationPage from "./education/page";
import SkillPage from "./my-skill/page";
import NavigatorButtonGroup from "@/components/navigatorButtonGroup";
type Props = {};
const skills = (props : Props) => {
	return (
		<div className=" w-screen h-screen overflow-hidden flex justify-center align-middle items-center flex-col bg-[#364f6b] py-10">
			<Tabs defaultValue="education" className="w-3/4 flex justify-center flex-col flex-1">
				<TabsList className=" flex justify-around w-full border-b-2 border-[#fc5185] py-3 h-16">
					<TabsTrigger value="education" className=" uppercase font-bold text-2xl text-[#f0f0f0]">education</TabsTrigger>
					<TabsTrigger value="skill" className=" uppercase font-bold text-2xl text-[#f0f0f0]">skills</TabsTrigger>
				</TabsList>
				<TabsContent value="education" className="py-5">
					<EducationPage />
				</TabsContent>
				<TabsContent value="skill" className="py-5">
					<SkillPage />
				</TabsContent>
			</Tabs>
            <NavigatorButtonGroup />
		</div>
	);
};

export default skills;
