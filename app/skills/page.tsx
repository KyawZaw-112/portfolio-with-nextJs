import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import skillData from "./education/api";
import EducationPage from "./education/page";
import SkillPage from "./my-skill/page";
import NavigatorButtonGroup from "@/components/navigatorButtonGroup";

const skills = () => {
	return (
		<div className=" w-screen h-screen overflow-hidden flex justify-center align-middle items-center flex-col bg-[#364f6b] py-6">
			<Tabs defaultValue="education" className="w-1/2 flex justify-center flex-col flex-1">
				<TabsList className=" bg-purple-300">
					<TabsTrigger value="education">education</TabsTrigger>
					<TabsTrigger value="skill">skills</TabsTrigger>
				</TabsList>
				<TabsContent value="education">
					<EducationPage />
				</TabsContent>
				<TabsContent value="skill">
					<SkillPage />
				</TabsContent>
			</Tabs>
            <NavigatorButtonGroup />
		</div>
	);
};

export default skills;
