<template>
    <div>
        <!-- header -->
        <header>
            <div class="bg-gray-700 text-white text-center fixed inset-x-0 top-0 z-10">
                <div class="container mx-auto grid grid-cols-10 p-3 sm:w-full md:w-5/12">
                    <div class="col-span-2 bg-white rounded-full h-10 w-10 p-1 mr-3 shadow-sm">
                        <router-link :to="{ name: 'home' }">
                            <img src="../assets/images/muslim.png" class="inline-block">
                        </router-link>
                    </div>
                    <div class="col-span-8">
                        <input type="text"
                            class="appearance-none w-full bg-gray-500 rounded-full h-7 shadow-md placeholder-white focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
                            placeholder="Cari yang ingin kamu bantu">
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style></style>
