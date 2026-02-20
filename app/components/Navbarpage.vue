<template>
    <header
        class="sticky top-4 z-[99] glass-card py-3 w-[95%] max-w-7xl mx-auto rounded-full"
    >
        <div class="flex justify-between items-center px-8">
            <div>
                <p
                    class="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500"
                >
                    Sila
                </p>
            </div>

            <nav class="flex items-center font-semibold text-sm">
                <a href="#hero" class="nav-item">Home</a>
                <a href="#about" class="nav-item">About</a>
                <a href="#process" class="nav-item">Process</a>
                <a href="#blog" class="nav-item">Blog</a>
                <a href="#services" class="nav-item">Services</a>
                <button
                    class="ml-4 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all shadow-lg shadow-purple-200 active:scale-95"
                >
                    Contact
                </button>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.nav-item {
    cursor: pointer;
    padding: 0.5rem 1.5rem;
}

.nav-item:hover {
    color: #9333ea;
}
</style>
