import { component$ } from "@builder.io/qwik"
import { NavBar } from "@nestri/ui"
import { TitleSection } from "@nestri/ui/react"

export default component$(() => {


    return (
        <>
            <NavBar />
            <TitleSection client:load title="Blog" description="All the latest news from Nestri and the community." />
            <div class="w-full flex flex-col py-8">
                <ul class="w-full list-none max-w-xl mx-auto flex flex-col">
                    <li>
                        <a href="/blog/nestri-1-0-0-release" class="w-full flex pt-6 pb-[4.5rem] border-y-2 border-gray-200 dark:border-gray-800 hover:bg-neutral-200 transition-all duration-200 rounded-lg dark:hover:bg-neutral-800 px-2 gap-8">
                            <div class="flex-1 flex flex-row gap-3.5 justify-between">
                                <div class="flex flex-col gap-3.5">
                                    <h3 class="text-3xl font-title font-bold mb-2">Nestri 1.0.0 Release</h3>
                                    <p class="text-gray-500 dark:text-gray-400 text-base">
                                        The latest release of Nestri includes a new user interface, improved performance, and a host of new features.
                                    </p>
                                </div>
                                <span class="text-base text-neutral-400 text-nowrap">Aug 20, 2024</span>
                            </div>
                        </a>
                    </li>
                    
                    {/* <li>
                        <a href="/blog/nestri-1-0-0-release" class="w-full flex pt-6 pb-[4.5rem] border-y-2 border-gray-200 dark:border-gray-800 hover:bg-neutral-200 transition-all duration-200 rounded-lg dark:hover:bg-neutral-800 px-2 gap-8">
                            <div class="flex-1 flex flex-row gap-3.5 justify-between">
                                <div class="flex flex-col gap-3.5">
                                    <h3 class="text-3xl font-title font-bold mb-2">Nestri 1.0.0 Release</h3>
                                    <p class="text-gray-500 dark:text-gray-400 text-base">
                                        The latest release of Nestri includes a new user interface, improved performance, and a host of new features.
                                    </p>
                                </div>
                                <span class="text-base text-neutral-400 text-nowrap">Aug 20, 2024</span>
                            </div>
                        </a>
                    </li><li>
                        <a href="/blog/nestri-1-0-0-release" class="w-full flex pt-6 pb-[4.5rem] border-y-2 border-gray-200 dark:border-gray-800 hover:bg-neutral-200 transition-all duration-200 rounded-lg dark:hover:bg-neutral-800 px-2 gap-8">
                            <div class="flex-1 flex flex-row gap-3.5 justify-between">
                                <div class="flex flex-col gap-3.5">
                                    <h3 class="text-3xl font-title font-bold mb-2">Nestri 1.0.0 Release</h3>
                                    <p class="text-gray-500 dark:text-gray-400 text-base">
                                        The latest release of Nestri includes a new user interface, improved performance, and a host of new features.
                                    </p>
                                </div>
                                <span class="text-base text-neutral-400 text-nowrap">Aug 20, 2024</span>
                            </div>
                        </a>
                    </li> */}
                </ul>
            </div>
        </>

    )
})