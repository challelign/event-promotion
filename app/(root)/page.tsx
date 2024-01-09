import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
	const page = Number(searchParams?.page) || 1;
	const searchText = (searchParams?.query as string) || "";
	const category = (searchParams?.category as string) || "";
	const events = await getAllEvents({
		query: searchText,
		limit: 6,
		page,
		category,
	});

	// console.log(events);
	// sm:640px md:768px  lg:1024px xl:1280px 2xl:1536px
	return (
		<>
			<section className="bg-primary-50 bg-dotted-pattern bg-contain py-3 md:py-5 ">
				{/* <p className=" bg-red-800 max-w-6xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full   text-white">
					chalie
				</p> */}
				<div className="wrapper grid grid-cols-1 gap-3 md:grid-cols-2 2xl:gap-0">
					<div className="flex flex-col justify-center gap-4">
						<h3 className="h3-bold">
							Host, Connect, Celebrate: Your Events, Our Platform!
						</h3>
						<p className="p-regular-20 md:p-regular-24">
							Book and learn helpful tips from 3,168+ mentors in world-class
							companies with our global community.
						</p>
						<Button size="lg" asChild className="button w-full sm:w-fit">
							<Link href="#events">Explore Now</Link>
						</Button>
					</div>

					<Image
						src="/assets/images/hero.png"
						alt="hero"
						width={1000}
						height={1000}
						className="max-h-[70vh] object-contain object-center xl:max-h-[50vh]"
					/>
				</div>
			</section>
			<section
				id="events"
				className="wrapper my-4 flex flex-col gap-4 md:gap-6"
			>
				<h4 className="h3-bold ">
					Trusted by <br /> Thousands of Events
				</h4>
				<div className="flex w-full flex-col gap-5 md:flex-row ">
					<Search /> <CategoryFilter />
				</div>
				<Collection
					data={events?.data}
					emptyTitle="No Events Found"
					emptyStateSubtext="Come back later"
					collectionType="All_Events"
					limit={6}
					page={page}
					totalPages={events?.totalPages}
				/>
			</section>
		</>
	);
}
