import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = async () => {
	// const user = useUser();

	// console.log("user", user);
	const isSignedIn = true;
	return (
		<header className="w-full border-b ">
			<div className="wrapper flex items-center justify-between">
				<Link href="/" className="w-36">
					<Image
						src="/assets/images/logo.svg"
						width={128}
						height={38}
						alt="Log"
					/>
				</Link>
				{/* <SignedIn> */}
				<nav className="md:flex-between hidden w-full max-w-xs">
					<NavItems />
				</nav>
				{/* </SignedIn> */}
				<div className="flex w-32 justify-end gap-3">
					{/* {isSignedIn ? (
						<>
							<SignedOut>
								<Button asChild className="rounded-full" size="lg">
									<Link href="/sign-in">SignOut</Link>
								</Button>
							</SignedOut>
							<SignedIn>
								<UserButton afterSignOutUrl="/" />
								<NavItems />
							</SignedIn>
						</>
					) : (
						<>
							<SignedOut>
								<Button asChild className="rounded-full" size="lg">
									<Link href="/sign-in">Login</Link>
								</Button>
							</SignedOut>
						</>
					)} */}

					<SignedIn>
						<UserButton afterSignOutUrl="/" />
						<MobileNav />
					</SignedIn>
					<SignedOut>
						<Button asChild className="rounded-full" size="lg">
							<Link href="/sign-in">Login</Link>
						</Button>
						<MobileNav />
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
