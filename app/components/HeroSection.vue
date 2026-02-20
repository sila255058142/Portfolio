<template>
    <section class="min-h-dvh w-full flex items-center overflow-hidden" id="hero">
        <div
            class="w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center justify-between"
        >
            <div class="flex flex-col gap-8 w-1/2">
                <div class="flex flex-col gap-4">
                    <h2
                        class="text-purple-600 font-semibold tracking-wide uppercase text-sm"
                    >
                        Available for Freelance
                    </h2>
                    <h1
                        class="text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
                    >
                        Hello, I'm
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
                        >
                            Sila Puntataw
                        </span>
                    </h1>
                    <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
                        I'm a Freelance UI/UX Designer and Developer based in
                        London, England. I strive to build immersive and
                        beautiful web applications through carefully crafted
                        code and user-centric design.
                    </p>
                </div>
                <div class="flex gap-4">
                    <UButton
                        size="xl"
                        class="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-200"
                    >
                        Hi Sila!
                    </UButton>
                </div>
                <div class="flex flex-wrap gap-5">
                    <div
                        v-for="(item, index) in allTechStacks"
                        :key="index"
                        class="flex w-10 justify-center"
                    >
                        <NuxtImg
                            :src="item.src"
                            :alt="item.name"
                            loading="lazy"
                            draggable="false"
                            class="w-30 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div
                class="w-1/2 flex justify-center lg:justify-end relative pt-20"
            >
                <div class="relative group w-72 h-96 md:w-100 md:h-[450px]">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-[#f3e8ff] via-[#d8b4fe] to-[#9333ea] rounded-4xl blur-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-20"
                    ></div>

                    <div
                        class="absolute -inset-1 bg-gradient-to-br from-purple-300 to-purple-600 rounded-[2.5rem] blur-sm opacity-50 -z-10"
                    ></div>

                    <div
                        class="absolute inset-0 bg-white/20 backdrop-blur-md rounded-4xl border-2 border-white/50 shadow-2xl overflow-hidden z-0"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-white/5"
                        ></div>
                    </div>

                    <div class="absolute inset-x-0 -top-20 bottom-0 z-10">
                        <NuxtImg
                            src="/image/Tor.webp"
                            alt="Tor"
                            loading="lazy"
                            draggable="false"
                            class="w-full h-full object-cover transform scale-125 origin-bottom transition-all duration-500 group-hover:scale-[1.3] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                        />
                    </div>

                    <div
                        class="absolute -inset-20 bg-purple-600/20 blur-[100px] rounded-full -z-30 animate-pulse"
                    ></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface TechStackItem {
    name: string;
    src: string;
}

const allTechStacks: TechStackItem[] = [
    { name: 'HTML', src: '/stack/html.webp' },
    { name: 'JavaScript', src: '/stack/javascript.webp' },
    { name: 'TaiwindCss', src: '/stack/taiwindcss.webp' },
    { name: 'TypeScript', src: '/stack/typescript.webp' },
    { name: 'Vite', src: '/stack/vite.webp' },
    { name: 'Vue', src: '/stack/vue.webp' },
    { name: 'Nuxt', src: '/stack/nuxt.webp' },
];
</script>
