import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { GiPingPongBat } from "react-icons/gi";



const Header: React.FC<Props> = ({ diplayedSide, setDisplayedSide }) => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	// Menu items array to populate both desktop and mobile links
	const menuItems = [
		{
			name: "Features",
			url: "#",
		},
		{
			name: "Pricing",
			url: "#",
		},
		{
			name: "Support",
			url: "#",
		},
	];

	return (
		<>
			{/* Main Header Section: Simple with Actions */}
			<div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
				{/* Main Header */}
				<header
					id="page-header"
					className="relative flex flex-none items-center py-8 "
				>
					{/* Main Header Content */}
					<div className="container mx-auto flex items-center justify-between px-4 text-center lg:px-20">
						{/* Left Section */}
						<div className="flex items-center">
							{/* Logo */}
							<a
								href="#"
								className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
							>
								<GiPingPongBat />
								<span>Company</span>
							</a>
							{/* END Logo */}
						</div>
						{/* END Left Section */}

						{/* Right Section */}
						<div className="flex items-center">
							{/* Navigation */}
							<nav className="hidden space-x-3 md:space-x-6 lg:block">
								{menuItems.map((item) => (
									<a
										key={item.name}
										href={item.url}
										className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
									>
										<span>{item.name}</span>
									</a>
								))}
							</nav>
							{/* END Navigation */}

							{/* Divider */}
							<div className="mx-6 hidden h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700 lg:block" />

							{/* Actions */}
							<div className="flex items-center justify-center gap-2">
								<a
									href="#"
									className="hidden items-center justify-center space-x-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-red-800 hover:border-red-300 hover:text-red-900 hover:shadow-sm focus:ring focus:ring-red-300 focus:ring-opacity-25 active:border-red-200 active:shadow-none dark:border-red-700 dark:bg-transparent dark:text-red-300 dark:hover:border-red-600 dark:hover:text-red-200 dark:focus:ring-red-600 dark:focus:ring-opacity-40 dark:active:border-red-700 lg:inline-flex"
								>
									<span>Log out</span>
								</a>
							</div>
							{/* END Actions */}

							{/* Open Mobile Navigation */}
							<div className="ml-3 lg:hidden">
								<button
									onClick={() => { setMobileNavOpen(true); setDisplayedSide(!diplayedSide) }}
									type="button"
									className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
									aria-controls="tkMobileNav"
								>
									<svg
										className="hi-mini hi-bars-3 inline-block h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
							{/* END Open Mobile Navigation */}
						</div>
						{/* END Right Section */}
					</div>
					{/* END Main Header Content */}

					{/* Mobile Navigation */}
					<Transition
						as={Fragment}
						show={mobileNavOpen}
						enter="transition ease-out duration-200"
						enterFrom="opacity-050 translate-x-full"
						enterTo="opacity-100 translate-x-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-x-0"
						leaveTo="opacity-50 translate-x-full"
					>
						<nav
							id="tkMobileNav"
							className="fixed bottom-0 right-0 top-0 z-50 w-72 overflow-auto bg-white/95 shadow-lg dark:bg-gray-800/95 lg:hidden"
							tabIndex={-1}
							aria-labelledby="tkMobileNavLabel"
							aria-modal="true"
							role="dialog"
						>
							<div className="flex items-center justify-between p-6">
								{/* Logo */}
								<a
									id="tkMobileNavLabel"
									href="#"
									className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
								>
									<svg
										className="hi-mini hi-cube-transparent inline-block h-5 w-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Company</span>
								</a>
								{/* END Logo */}

								{/* Close Mobile Navigation */}
								<button
									onClick={() => setMobileNavOpen(false)}
									type="button"
									className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
								>
									<svg
										className="hi-mini hi-x-mark -mx-0.5 inline-block h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
									</svg>
								</button>
								{/* END Close Mobile Navigation */}
							</div>
							<div className="h-px bg-gray-200/75 dark:bg-gray-700/75" />
							<nav className="flex flex-col gap-2 px-6 py-5">
								{menuItems.map((item) => (
									<a
										key={item.name}
										href={item.url}
										className="py-1 text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
									>
										<span>{item.name}</span>
									</a>
								))}
							</nav>
							<div className="h-px bg-gray-200/75 dark:bg-gray-700/75" />
							<div className="flex flex-col gap-2 p-6">
								<a
									href="#"
									className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
								>
									<span>Sign In</span>
								</a>
								<a
									href="#"
									className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
								>
									<span>Get Access</span>
									<svg
										className="hi-mini hi-arrow-right inline-block h-5 w-5 opacity-50"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</div>
						</nav>
					</Transition>
					{/* END Mobile Navigation */}

					{/* Mobile Navigation Backdrop */}
					<Transition
						as={Fragment}
						show={mobileNavOpen}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div
							onClick={() => setMobileNavOpen(false)}
							className="fixed inset-0 z-40 bg-gray-900 bg-opacity-20 backdrop-blur-sm will-change-auto dark:bg-opacity-80 lg:hidden"
						/>
					</Transition>
					{/* END Mobile Navigation Backdrop */}
				</header>
				<div className="container mx-auto px-4 pb-12 lg:px-8 xl:max-w-7xl">
					<div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-64 text-gray-400 dark:border-gray-700/75 dark:bg-gray-800/50">
						Hero Content
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
