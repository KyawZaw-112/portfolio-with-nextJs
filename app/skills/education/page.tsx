import React from "react";
import educationData from "./api";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Props = {};
const [skillData] = educationData;

const EducationPage = (props: Props) => {

	return (
		<Table className="text-[#f0f0f0]">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">No.</TableHead>
					<TableHead className="text-left">Type Of Certficate</TableHead>
					<TableHead className="text-left">University</TableHead>
					<TableHead className="text-center">Year</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{educationData.map((ed, id) => {
					return (
						<TableRow className=" h-20">
							<TableCell className="font-medium">
								{ed.id}
							</TableCell>
							<TableCell className=" capitalize text-lg font-bold text-left">{ed.description}</TableCell>
							<TableCell className="text-left uppercase text-lg font-bold">
								{ed.from}
							</TableCell>
							<TableCell className="text-center">{ed.timeOne}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default EducationPage;
