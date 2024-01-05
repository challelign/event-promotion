import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { useParams } from "next/navigation";
import React from "react";

const EventDetail = async ({ params: { id } }: SearchParamProps) => {
	// console.log(id);
	const event = await getEventById(id);
	// console.log("Event detail =>", event);
	return <section></section>;
};

export default EventDetail;
