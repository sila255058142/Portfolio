<template>
    <section class="mb-16 h-dvh" id="about">
        <div
            class="w-7xl mx-auto px-8 flex items-center gap-12 glass-card py-12 rounded-lg h-[728px]"
        >
            <div class="w-1/2 h-full justify-center flex items-center">
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
                            src="/image/TorHand.webp"
                            alt="Tor-Hand"
                            loading="lazy"
                            draggable="false"
                            class="w-full h-full object-cover transform scale-100 origin-bottom transition-all duration-500 group-hover:scale-[1.1] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                        />
                    </div>

                    <div
                        class="absolute -inset-20 bg-purple-600/20 blur-[100px] rounded-full -z-30 animate-pulse"
                    ></div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-6">
                <div class="w-3/4 flex flex-col gap-6">
                    <p class="text-4xl font-semibold">
                        I am Professional User Experience Designer
                    </p>
                    <p>
                        I design and develop services for customers specializing
                        creating stylish, modern websites, web services and
                        online stores. My passion is to design digital user
                        experiences.
                    </p>
                </div>
                <div class="w-3/4">
                    <p>
                        I design and develop services for customers specializing
                        creating stylish, modern websites, web services.
                    </p>
                </div>
                <div class="flex gap-4">
                    <button
                        class="button-main bg-purple-500 text-white font-semibold"
                    >
                        My project
                    </button>
                    <button
                        class="button-main border-purple-500 border-2 text-purple-500 font-semibold"
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style></style>
