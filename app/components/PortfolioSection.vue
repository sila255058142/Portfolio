<template>
    <section class="bg-white py-16 px-6 min-h-screen">
        <div class="max-w-7xl mx-auto py-8 px-8">
            <div class="mb-12 text-center">
                <p
                    class="text-5xl font-black uppercase tracking-tighter text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                    PORTFOLIO
                </p>
            </div>

            <article>
                <div v-if="pending" class="text-center py-20 text-gray-400">
                    กำลังโหลดงานจาก GitHub...
                </div>

                <div v-else>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            v-for="item in displayedExercises"
                            :key="item.sha"
                            class="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                        >
                            <div
                                class="w-full h-56 bg-slate-100 flex items-center justify-center group-hover:bg-purple-50 transition-colors"
                            >
                                <span
                                    class="text-4xl text-gray-300 group-hover:scale-110 transition-transform duration-300"
                                    >📂</span
                                >
                            </div>

                            <div class="p-6 flex flex-col flex-1 gap-3">
                                <span
                                    class="text-xs font-semibold text-gray-400 uppercase tracking-widest"
                                >
                                    GitHub Repository
                                </span>
                                <h3
                                    class="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors"
                                >
                                    {{ formatName(item.name) }}
                                </h3>
                                <p
                                    class="text-sm text-gray-500 leading-relaxed flex-1"
                                >
                                    Source code for {{ item.name }} on branch
                                    Homework.
                                </p>

                                <a
                                    :href="item.html_url"
                                    target="_blank"
                                    class="mt-auto flex items-center gap-2 text-purple-600 font-bold border border-purple-200 rounded-lg px-4 py-2 w-fit hover:bg-purple-600 hover:text-white transition-colors"
                                >
                                    Case Study
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="filteredExercises.length > 6"
                        class="mt-16 text-center"
                    >
                        <button
                            @click="showAll = !showAll"
                            class="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-200"
                        >
                            {{
                                showAll
                                    ? 'Show Less'
                                    : `View All Projects (${filteredExercises.length})`
                            }}
                            <span
                                :class="showAll ? 'rotate-180' : ''"
                                class="transition-transform duration-300"
                                >↓</span
                            >
                        </button>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// สร้างตัวแปรมาเก็บสถานะการเปิด/ปิด
const showAll = ref(false);

const { data: contents, pending } = await useFetch(
    'https://api.github.com/repos/Douzhebag/ForTrainee/contents?ref=Homework',
);

const filteredExercises = computed(() => {
    if (!contents.value) return [];

    const list = contents.value.filter(
        (item) =>
            item.type === 'dir' && item.name.toLowerCase().includes('exercise'),
    );

    return [...list].reverse();
});

// ปรับ Logic การแสดงผล: ถ้า showAll เป็น true ให้คืนค่าทั้งหมด ถ้า false ให้เอาแค่ 6
const displayedExercises = computed(() => {
    if (showAll.value) {
        return filteredExercises.value;
    }
    return filteredExercises.value.slice(0, 6);
});

const formatName = (name) => {
    return name.replace(/-/g, ' ');
};
</script>
