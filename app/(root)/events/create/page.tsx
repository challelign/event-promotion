import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const CreateEvent = () => {
	const { sessionClaims } = auth();
	let userId = sessionClaims?.userId as string;
	console.log("userId from Clerk", userId);

	if (!userId) {
		userId = "659804040fd75fd95096cb02";
	}
	console.log("userId from Local ID", userId);
	return (
		<>
			<section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-3 md:py-4">
				<h4 className="wrapper flex-center h5-bold text-center  sm:text-left">
					Create Event
				</h4>
			</section>
			<div className="wrapper my-1">
				<EventForm userId={userId} type="Create" />
			</div>
		</>
	);
};

export default CreateEvent;
