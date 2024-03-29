import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { UpdateEventParams } from "@/types";
import { auth } from "@clerk/nextjs";
import React from "react";
type UpdateEventProps = {
	params: {
		id: string;
	};
};
const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
	const { sessionClaims } = auth();
	let userId = sessionClaims?.userId as string;
	// if (!userId) {
	// 	userId = "659802300fd75fd95096caed";
	// }
	// const userId = "659802300fd75fd95096caed"

	console.log("userId", userId);
	const event = await getEventById(id);
	return (
		<>
			<section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
				<h3 className="wrapper h3-bold text-center justify-center sm:text-left">
					Update Event
				</h3>
			</section>
			<div className="wrapper my-8">
				<EventForm
					userId={userId}
					type="Update"
					eventId={event._id}
					event={event}
				/>
			</div>
		</>
	);
};

export default UpdateEvent;
