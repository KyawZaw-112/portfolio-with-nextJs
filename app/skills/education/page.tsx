import React from "react";
import skillDatas from "./api";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Props = {};
const [skillData] = skillDatas;

const EducationPage = (props: Props) => {

	return (
		<Table className="text-[#f0f0f0]">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">No.</TableHead>
					<TableHead>Type Of Certficate</TableHead>
					<TableHead className="text-left">University</TableHead>
					<TableHead className="text-center">Year</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skillDatas.map((skill, id) => {
					return (
						<TableRow className=" h-20">
							<TableCell className="font-medium">
								{skill.id}
							</TableCell>
							<TableCell className=" capitalize text-lg font-bold">{skill.description}</TableCell>
							<TableCell className="text-left uppercase text-lg font-bold">
								{skill.from}
							</TableCell>
							<TableCell className="text-center">{skill.timeOne}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default EducationPage;
